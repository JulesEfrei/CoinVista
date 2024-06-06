import { getTranslation } from "../translation";
import { fetchAssets, fetchSavedAssets } from "@utils/api/assets";
import AssetsList from "@organisms/AssetsList";
import type {
  apiAssetsResponse,
  assetResponse,
  assetsResponse,
} from "@customTypes/api/assets";
import type { translation } from "@customTypes/translationType";
import { isConnectedS } from "@utils/supabase/actions";
import { createClient } from "@utils/supabase/server";
import ExchangeCard from "@organisms/ExchangeCard";
import { fetchExchanges } from "@utils/api/exchanges";
import { exchange } from "@customTypes/api/exchanges";

export default async function Home({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const translation: translation = await getTranslation(
    params.lang.split("-")[0]
  );

  const apiAssets: apiAssetsResponse = await fetchAssets(
    Number(searchParams.page) || 1
  );

  function mergeAndMarkSaved(
    allData: apiAssetsResponse,
    savedData?: apiAssetsResponse
  ): assetsResponse {
    const uniqueMap = new Map<string, assetResponse>();

    if (savedData) {
      savedData.data.forEach((item) => {
        if (
          searchParams.page === undefined ||
          Number(searchParams.page) === 1
        ) {
          uniqueMap.set(item.id, { ...item, isSaved: true });
        }
      });
    }

    allData.data.forEach((item) => {
      if (!uniqueMap.has(item.id)) {
        uniqueMap.set(item.id, { ...item, isSaved: false });
      }
    });

    const mergedData = Array.from(uniqueMap.values());

    return mergedData;
  }

  let dataList;

  const {
    data: { user },
    error,
  } = await isConnectedS();

  if (user) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("crypto")
      .select()
      .eq("userId", user.id);
    if (error) throw Error("Cannot fetch user preferences");

    const savedCrypto = await fetchSavedAssets(data.map((elm) => elm.cryptoId));

    dataList = mergeAndMarkSaved(apiAssets, savedCrypto);
  } else {
    dataList = mergeAndMarkSaved(apiAssets);
  }

  const { data: exchanges } = await fetchExchanges();

  if (exchanges.error) {
    throw Error("Unable to fetch exchanges.");
  }

  return (
    <>
      <section className="w-full md:h-1/2 h-auto border-2 border-gray-500">
        <div className="h-3/5">
          <ExchangeCard
            translation={translation}
            exchange={exchanges[0]}
            intent="primary"
          />
        </div>
        <div className="md:h-2/5 h-auto flex md:flex-row flex-col items-center justify-between">
          {exchanges.splice(1, 4).map((elm: exchange, index: number) => (
            <ExchangeCard
              translation={translation}
              exchange={elm}
              intent="secondary"
              key={`${elm.id}-${index}`}
            />
          ))}
        </div>
      </section>
      <section className="mt-10 lg:px-20">
        <AssetsList
          list={dataList}
          page={Number(searchParams.page) || 1}
          translation={translation}
          user={user}
        />
      </section>
    </>
  );
}

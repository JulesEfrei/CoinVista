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

  return (
    <>
      <section className="bg-violet-600 w-full h-1/2"></section>
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

import { getTranslation } from "../translation";
import { fetchAssets, fetchSavedAssets } from "@utils/api/assets";
import AssetsList from "@organisms/AssetsList";
import {
  apiAssetsResponse,
  assetResponse,
  assetsResponse,
} from "@type/api/assets";

export default async function Home({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const translation = await getTranslation(params.lang.split("-")[0]);

  const apiAssets: apiAssetsResponse = await fetchAssets(
    Number(searchParams.page) || 1
  );

  const savedCrypto: apiAssetsResponse = await fetchSavedAssets();

  function mergeAndMarkSaved(
    savedData: apiAssetsResponse,
    allData: apiAssetsResponse
  ): assetsResponse {
    const uniqueMap = new Map<string, assetResponse>();

    savedData.data.forEach((item) => {
      if (Number(searchParams.page) === 1) {
        uniqueMap.set(item.id, { ...item, isSaved: true });
      }
    });

    allData.data.forEach((item) => {
      if (!uniqueMap.has(item.id)) {
        uniqueMap.set(item.id, { ...item, isSaved: false });
      }
    });

    const mergedData = Array.from(uniqueMap.values());

    return mergedData;
  }

  const data = mergeAndMarkSaved(savedCrypto, apiAssets);

  return (
    <>
      <section className="bg-violet-600 w-full h-1/2"></section>
      <section className="mt-10 lg:px-20">
        <AssetsList
          list={data}
          page={Number(searchParams.page) || 1}
          translation={translation}
        />
      </section>
    </>
  );
}

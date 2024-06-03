import AreaChart from "@atoms/AreaChart";
import CryptoCard from "@molecules/CryptoCard";
import SelectCryptoForm from "@molecules/SelectCryptoForm";
import { fetchAllAssets, fetchAssetHistory } from "@utils/api/assets";
import React from "react";
import { getTranslation } from "../translation";
import type { translation } from "@customTypes/translationType";
import {
  apiAssetResponse,
  apiDataAssetResponse,
} from "@customTypes/api/assets";

export default async function ComparePage({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const translation: translation = await getTranslation(
    params.lang.split("-")[0]
  );
  const cryptoList = await fetchAllAssets(100);

  const idsAsArray =
    searchParams.ids === undefined
      ? []
      : Array.isArray(searchParams.ids)
      ? searchParams.ids
      : [searchParams.ids];

  const today = new Date();
  const endTime = today.getTime();
  const startTime = new Date(today).setDate(today.getDate() - 30);

  const assetsHistory = await Promise.all(
    idsAsArray.map(async (id) => {
      const res = await fetchAssetHistory(id, "d1", startTime, endTime);
      return res.data;
    })
  );

  const formatTitle = idsAsArray.map(
    (elm) => `${elm[0].toUpperCase()}${elm!.slice(1)} price (USD)`
  );

  const colors: { color: string; backgroundColor: string }[] = [
    { color: "#8b5cf6", backgroundColor: "rgba(167, 139, 250, 0.2)" },
    { color: "#0ea5e9", backgroundColor: "rgba(56, 189, 248, 0.2)" },
    { color: "#2ec4b6", backgroundColor: "rgba(203, 243, 240, 0.2)" },
    { color: "#ffd53e", backgroundColor: "rgba(255, 213, 62, 0.2)" },
  ];

  return (
    <>
      <h1 className="text-h1">{translation.compare.title}</h1>
      <div className="flex sm:flex-row flex-col mt-10 gap-5 md:h-2/3 h-screen">
        <div className="border-1 border-slate-500 md:w-3/4 w-full min-h-96 xs:p-4 p-2 flex justify-center items-center gap-2 rounded-md">
          {idsAsArray.length > 0 ? (
            <AreaChart
              data={assetsHistory.map((assetHistory) =>
                assetHistory.map((elm: { priceUsd: string; time: string }) =>
                  Number(elm.priceUsd)
                )
              )}
              labels={assetsHistory[0].map(
                (elm: { priceUsd: string; time: string }) =>
                  new Date(elm.time).toDateString()
              )}
              title={formatTitle}
              color={colors}
            />
          ) : (
            <h2>{translation.compare.empty}</h2>
          )}
        </div>
        <div className="md:w-1/4 border-1 border-slate-500 rounded-md">
          <SelectCryptoForm
            defaultValues={
              searchParams.ids === undefined
                ? null
                : Array.isArray(searchParams.ids)
                ? searchParams.ids
                : [searchParams.ids]
            }
            cryptoList={cryptoList.data}
            translation={translation}
          />
        </div>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 grid-cols-1">
        {idsAsArray.length > 0
          ? idsAsArray.map((elm, index) => (
              <CryptoCard
                crypto={
                  cryptoList.data.filter(
                    (crypto: apiDataAssetResponse) => crypto.id === elm
                  )[0]
                }
                translation={translation}
                key={`${elm}-${index}`}
              />
            ))
          : null}
      </div>
    </>
  );
}

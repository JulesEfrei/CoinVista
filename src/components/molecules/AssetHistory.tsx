"use client";

import Button from "@atoms/Button";
import AreaChart from "@atoms/AreaChart";
import type { apiAssetHistory, intervalDate } from "@customTypes/api/assets";
import { useMemo, useState } from "react";
import useSWR, { Fetcher } from "swr";
import Spinner from "@atoms/Spinner";

const fetcher: Fetcher<apiAssetHistory, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const AssetHistory = ({
  cryptoId,
  isPositive,
  title,
}: {
  cryptoId: string;
  isPositive: boolean;
  title: string;
}) => {
  const [interval, setInterval] = useState<intervalDate>("1D");

  const today = useMemo(() => new Date(), []);
  const endTime = today.getTime();

  const startTime = useMemo(() => {
    const d = new Date(today);
    switch (interval) {
      case "1H":
        return d.setUTCHours(today.getUTCHours() - 48);
      case "1D":
        return d.setDate(today.getDate() - 30);
      case "1W":
        return d.setFullYear(today.getFullYear() - 1);
      case "1M":
        return d.setFullYear(today.getFullYear() - 1);
      case "3M":
        return d.setFullYear(today.getFullYear() - 3);
    }
  }, [interval, today]);

  const { data, error, isLoading } = useSWR(
    `https://api.coincap.io/v2/assets/${cryptoId}/history?interval=${
      interval === "1H" ? "h1" : "d1"
    }&start=${startTime}&end=${endTime}`,
    fetcher
  );

  if (error || data?.error) {
    throw Error("Impossible to fetch graph");
  }

  const filterDataByInterval = () => {
    const initialData = data!.data;
    let output = [initialData.at(-1)];
    let curr = today;

    if (interval !== "1D" && interval !== "1H") {
      [...initialData].reverse().forEach((elm) => {
        if (interval === "1W") {
          if (
            new Date(elm.time).toLocaleString("en-GB").split(",")[0] ===
            new Date(new Date(curr).setDate(new Date(curr).getDate() - 7))
              .toLocaleString("en-GB")
              .split(",")[0]
          ) {
            curr = elm.time;
            output.push(elm);
          }
        } else if (interval === "1M") {
          if (
            new Date(elm.time).toLocaleString("en-GB").split(",")[0] ===
            new Date(
              new Date(curr).setUTCMonth(new Date(curr).getUTCMonth() - 1)
            )
              .toLocaleString("en-GB")
              .split(",")[0]
          ) {
            output.push(elm);
            curr = elm.time;
          }
        } else if (interval === "3M") {
          if (
            new Date(elm.time).toLocaleString("en-GB").split(",")[0] ===
            new Date(
              new Date(curr).setUTCMonth(new Date(curr).getUTCMonth() - 3)
            )
              .toLocaleString("en-GB")
              .split(",")[0]
          ) {
            output.push(elm);
            curr = elm.time;
          }
        }
      });
    }
    return interval === "1H" || interval === "1D"
      ? initialData
      : output.reverse();
  };

  return (
    <div className="border-1 border-slate-500 xs:p-4 p-2 flex flex-col gap-2 rounded-md">
      <div className="flex xs:flex-row flex-col items-start gap-2 xs:gap-0 xs:justify-between xs:items-center">
        <h1 className="xs:text-lead text-h4 font-normal">{title}</h1>
        <div className="flex items-center justify-center xs:gap-2 gap-1">
          <Button type="button" size="sm" onClick={() => setInterval("1H")}>
            <span className={(interval === "1H" && "text-success").toString()}>
              1H
            </span>
          </Button>
          <Button type="button" size="sm" onClick={() => setInterval("1D")}>
            <span className={(interval === "1D" && "text-success").toString()}>
              1D
            </span>
          </Button>
          <Button type="button" size="sm" onClick={() => setInterval("1W")}>
            <span className={(interval === "1W" && "text-success").toString()}>
              1W
            </span>
          </Button>
          <Button type="button" size="sm" onClick={() => setInterval("1M")}>
            <span className={(interval === "1M" && "text-success").toString()}>
              1M
            </span>
          </Button>
          <Button type="button" size="sm" onClick={() => setInterval("3M")}>
            <span className={(interval === "3M" && "text-success").toString()}>
              3M
            </span>
          </Button>
        </div>
      </div>

      <div>
        <div className="xs:max-h-[450px] h-[300px] xs:h-auto flex justify-center">
          {isLoading ? (
            <Spinner />
          ) : (
            <AreaChart
              title={[
                `${cryptoId[0].toUpperCase()}${cryptoId.slice(1)} price (USD)`,
              ]}
              data={[
                filterDataByInterval().map((elm) => Number(elm!.priceUsd)),
              ]}
              labels={filterDataByInterval().map((elm) => {
                return new Date(elm!.time).toDateString();
              })}
              color={
                isPositive
                  ? [
                      {
                        color: "#22c55e",
                        backgroundColor: "rgba(34, 197, 94, .5)",
                      },
                    ]
                  : [
                      {
                        color: "#dc2626",
                        backgroundColor: "rgba(220, 38, 38, .5)",
                      },
                    ]
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AssetHistory;

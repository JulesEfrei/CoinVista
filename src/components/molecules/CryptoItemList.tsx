"use client";

import CLink from "@atoms/CLink";
import { assetResponse } from "@type/api/assets";
import { useState } from "react";
import {
  PiBookmarkSimpleFill,
  PiBookmarkSimpleLight,
  PiFire,
} from "react-icons/pi";

const CryptoItemList = (props: {
  crypto: assetResponse;
  isServerSaved: boolean;
}) => {
  const [isSaved, setIsSaved] = useState(props.isServerSaved);

  const formatNumber = (n) => {
    n = Number(n);
    if (n < 1e3) return Number(n).toPrecision(4);
    if (n >= 1e3 && n < 1e6) {
      const e = (n / 1e3).toString().split(".");
      return e[0] + " " + e[1].slice(0, 3) + "," + e[1].slice(3, 5);
    }
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
  };

  const isPositive = Number(props.crypto.changePercent24Hr) > 0;

  const isFire =
    Number(props.crypto.changePercent24Hr) > 7 ||
    Number(props.crypto.rank) <= 3;

  return (
    <div className="grid grid-cols-11 px-3 py-2 text-sm xs:text-p">
      <div className="col-span-3 w-full grid grid-cols-subgrid items-center gap-2">
        <div className="col-span-1 flex items-center gap-3">
          <h3 className="text-slate-400">{props.crypto.rank}</h3>
          <div className="bg-violet-400 w-4 sm:w-6 h-4 sm:h-6 rounded-full"></div>
        </div>
        <div className="col-span-2">
          <CLink href={`/details/${props.crypto.name.toLowerCase()}`}>
            <h3>{props.crypto.name}</h3>
          </CLink>
          <div className="flex items-center">
            <h4 className="mr-1 text-slate-400">{props.crypto.symbol}</h4>
            {isFire ? <PiFire className="text-violet-500" /> : null}
          </div>
        </div>
      </div>

      <div className="col-span-5 xs:col-span-6 w-full grid grid-cols-subgrid items-center">
        <p className="col-span-3 xs:col-span-2 text-center">
          ${formatNumber(props.crypto.priceUsd)}
        </p>
        <p className="col-span-2 xs:col-span-2 text-center">
          {formatNumber(props.crypto.supply)}
        </p>
        <p className="xs:col-span-2 text-center hidden xs:block">
          ${formatNumber(props.crypto.vwap24Hr)}
        </p>
      </div>

      <div className="col-span-3 xs:col-span-2 flex items-center justify-end gap-3">
        <h4 className={isPositive ? "text-success" : "text-danger"}>
          {isPositive ? "+" : null}
          {Number(props.crypto.changePercent24Hr).toFixed(2)}%
        </h4>
        {isSaved ? (
          <button onClick={() => setIsSaved((curr) => !curr)}>
            <PiBookmarkSimpleFill className="text-violet-500" />
          </button>
        ) : (
          <button onClick={() => setIsSaved((curr) => !curr)}>
            <PiBookmarkSimpleLight />
          </button>
        )}
      </div>
    </div>
  );
};

export default CryptoItemList;

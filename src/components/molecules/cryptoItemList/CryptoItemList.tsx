"use client";

import CLink from "@atoms/CLink";
import type { assetResponse } from "@customTypes/api/assets";
import { formatNumber, isFire, isPositive } from "@utils/assetsUtils";
import Image from "next/image";
import { useState } from "react";
import {
  PiBookmarkSimpleFill,
  PiBookmarkSimpleLight,
  PiFire,
} from "react-icons/pi";

const CryptoItemList = ({ crypto }: { crypto: assetResponse }) => {
  const [isSaved, setIsSaved] = useState(crypto.isSaved);

  return (
    <div className="grid grid-cols-11 px-3 py-2 text-sm xs:text-p">
      <div className="col-span-4 xs:col-span-3 w-full grid grid-cols-subgrid items-center gap-0 xs:gap-2">
        <div className="col-span-2 xs:col-span-1 flex items-center gap-3">
          <h3 className="text-slate-400">{crypto.rank}</h3>
          <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full">
            <Image
              src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
              alt={`${crypto.name} icon`}
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="col-span-2">
          <CLink
            href={`/details/${crypto.name.toLowerCase()}`}
            className="w-fit block"
          >
            <h3 className="w-fit">{crypto.name}</h3>
          </CLink>
          <div className="flex items-center">
            <h4 className="mr-1 text-slate-400">{crypto.symbol}</h4>
            {isFire(crypto.changePercent24Hr, crypto.rank) ? (
              <PiFire className="text-violet-500" />
            ) : null}
          </div>
        </div>
      </div>

      <div className="col-span-4 xs:col-span-6 w-full grid grid-cols-subgrid items-center">
        <p className="col-span-4 xs:col-span-2 text-center">
          ${formatNumber(crypto.priceUsd)}
        </p>
        <p className="xs:col-span-2 text-center hidden xs:block">
          {formatNumber(crypto.supply)}
        </p>
        <p className="xs:col-span-2 text-center hidden xs:block">
          ${formatNumber(crypto.vwap24Hr)}
        </p>
      </div>

      <div className="col-span-3 xs:col-span-2 flex items-center justify-end gap-3">
        <h4
          className={
            isPositive(crypto.changePercent24Hr)
              ? "text-success"
              : "text-danger"
          }
        >
          {isPositive(crypto.changePercent24Hr) ? "+" : null}
          {Number(crypto.changePercent24Hr).toFixed(2)}%
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

import { assetResponse } from "@type/api/assets";
import { formatNumber, isFire, isPositive } from "@utils/assetsUtils";
import Image from "next/image";
import { PiFire } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

export default function CryptoCard({ crypto }: { crypto: assetResponse }) {
  return (
    <div className="border-1 border-black dark:border-gray-500 rounded-md p-3">
      <div className="flex gap-3 items-center w-full relative">
        <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full">
          <Image
            src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
            alt={`${crypto.name} icon`}
            width={24}
            height={24}
          />
        </div>
        <h2 className="text-h3">{crypto.name}</h2>
        <div className="flex items-center">
          <h4 className="mr-1 text-slate-400 leading-8">{crypto.symbol}</h4>
          {isFire(crypto.changePercent24Hr, crypto.rank) ? (
            <PiFire className="text-violet-500" />
          ) : null}
        </div>
        <div className="absolute right-0">
          {isPositive(crypto.changePercent24Hr) ? (
            <FaArrowTrendUp className="text-success" size={20} />
          ) : (
            <FaArrowTrendDown className="text-danger" size={20} />
          )}
        </div>
      </div>
      <div className="mt-3 flex items-center flex-wrap justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold">Price USD</p>
          <p className="text-lead text-slate-400 font-light">
            ${formatNumber(crypto.priceUsd)}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold">Supply</p>
          <p className="text-lead text-slate-400 font-light">
            {formatNumber(crypto.supply)}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold">Vwap 24h</p>
          <p className="text-lead text-slate-400 font-light">
            ${formatNumber(crypto.vwap24Hr)}
          </p>
        </div>
      </div>
    </div>
  );
}

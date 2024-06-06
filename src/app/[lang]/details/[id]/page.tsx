import Button from "@atoms/Button";
import type { apiAssetResponse, apiMarkets } from "@customTypes/api/assets";
import { fetchAsset } from "@utils/api/assets";
import { formatNumber, isFire, isPositive } from "@utils/assetsUtils";
import Image from "next/image";
import { PiFire } from "react-icons/pi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { cva } from "class-variance-authority";
import AssetHistory from "@molecules/AssetHistory";
import Spinner from "@atoms/Spinner";
import { getTranslation } from "app/[lang]/translation";
import type { translation } from "@customTypes/translationType";
import { fetchExchange } from "@utils/api/exchanges";

const Page = async ({ params }: { params: { lang: string; id: string } }) => {
  const translation: translation = await getTranslation(
    params.lang.split("-")[0]
  );
  const cryptoDetails: apiAssetResponse = await fetchAsset(params.id);

  const markets: apiMarkets = await fetchExchange(params.id);

  const rankSpanClasses = cva(["px-3", "py-1", "rounded-md"], {
    variants: {
      bg: {
        gold: "bg-[#FFD95A]",
        normal: "bg-gray-500 bg-opacity-50",
      },
    },
  });

  if (cryptoDetails === undefined || cryptoDetails.error) {
    throw Error("Not Found");
  }

  return (
    <>
      <section className="xs:px-5 mb-10">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center md:gap-3 gap-2">
            <Image
              src={`https://assets.coincap.io/assets/icons/${cryptoDetails.data.symbol.toLowerCase()}@2x.png`}
              alt={`${cryptoDetails.data.name} icon`}
              width={50}
              height={50}
            />
            <div>
              <h1 className="xs:text-h2 text-h4">{cryptoDetails.data.name}</h1>
              <h4 className="flex items-center gap-2 xs:text-h4 text-p">
                {cryptoDetails.data.symbol}{" "}
                {isFire(
                  cryptoDetails.data.changePercent24Hr,
                  cryptoDetails.data.rank
                ) ? (
                  <PiFire className="text-violet-500" />
                ) : null}
              </h4>
            </div>
          </div>
          <Button
            type="button"
            onClick={async () => {
              "use server";
            }}
          >
            <MdOutlinePlaylistAdd />
            {translation.detail.addToWatchList}
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:gap-0 gap-4">
          <div className="flex flex-col justify-between gap-5 md:gap-3">
            <h4>
              {translation.cryptoField.rank}{" "}
              <span
                className={rankSpanClasses({
                  bg: Number(cryptoDetails.data.rank) <= 3 ? "gold" : "normal",
                })}
              >
                {cryptoDetails.data.rank}
              </span>
            </h4>
            <h4>
              {translation.cryptoField.bestExchange}{" "}
              <span className="px-3 py-1 bg-gray-500 bg-opacity-50 rounded-md">
                {markets !== undefined && !markets.error
                  ? markets.data[0].exchangeId
                  : "N/A"}
              </span>
            </h4>
            <h1 className="text-h4">
              $ {formatNumber(cryptoDetails.data.priceUsd)}{" "}
              <span
                className={
                  isPositive(cryptoDetails.data.changePercent24Hr)
                    ? "text-success"
                    : "text-danger"
                }
              >
                {isPositive(cryptoDetails.data.changePercent24Hr) ? "+" : null}
                {Number(cryptoDetails.data.changePercent24Hr).toFixed(2)}%
              </span>
            </h1>
          </div>

          <div className="grid grid-rows-2 grid-cols-9 md:gap-6 gap-2">
            <div className="col-span-3">
              <p className="text-gray-500">
                {translation.cryptoField.marketCapUsd}
              </p>
              <h4>$ {formatNumber(cryptoDetails.data.marketCapUsd)}</h4>
            </div>
            <div className="col-span-3">
              <p className="text-gray-500">
                {translation.cryptoField.maxSupply}
              </p>
              <h4>{formatNumber(cryptoDetails.data.maxSupply)}</h4>
            </div>
            <div className="col-span-3">
              <p className="text-gray-500">{translation.cryptoField.supply}</p>
              <h4>{formatNumber(cryptoDetails.data.supply)}</h4>
            </div>
            <div className="sm:col-span-3 col-span-4">
              <p className="text-gray-500">
                {translation.cryptoField.volumeUsd24Hr}
              </p>
              <h4>$ {formatNumber(cryptoDetails.data.volumeUsd24Hr)}</h4>
            </div>
            <div className="sm:col-span-3 col-span-5">
              <p className="text-gray-500">
                {translation.cryptoField.vwap24Hr}
              </p>
              <h4>$ {formatNumber(cryptoDetails.data.vwap24Hr)}</h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <AssetHistory
          cryptoId={params.id}
          isPositive={isPositive(cryptoDetails.data.changePercent24Hr)}
          title={translation.detail.chartTitle}
        />
      </section>
    </>
  );
};

export default Page;

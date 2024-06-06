import StyledLink from "@atoms/StyledLink";
import { exchange } from "@customTypes/api/exchanges";
import { translation } from "@customTypes/translationType";
import { formatNumber } from "@utils/assetsUtils";
import { GoLinkExternal } from "react-icons/go";

interface Props {
  exchange: exchange;
  intent: "primary" | "secondary";
  translation: translation;
}

export default function ExchangeCard(props: Props) {
  const translation = props.translation.exchange;

  return (
    <div
      className={`
    ${
      props.intent === "primary"
        ? "p-5"
        : "p-3 border-t-1 border-gray-500 w-full"
    }
    ${
      props.intent === "secondary" && props.exchange.rank !== "5"
        ? "border-r-1"
        : ""
    }
    h-full flex flex-col justify-between gap-5 relative overflow-hidden
    `}
    >
      <div className="w-40 h-40 absolute right-0 top-0 translate-x-[50%] translate-y-[-50%] rotate-45 bg-slate-50 z-0"></div>
      <h2
        className={`
    ${
      props.intent === "primary" ? "md:text-h2 text-h3" : "text-p font-semibold"
    } z-10
    `}
      >
        <span className="mr-3 text-violet-400">{props.exchange.rank}.</span>
        {props.exchange.name}
      </h2>
      <div className="flex justify-between items-center z-10">
        <div>
          <h4 className="text-slate-400 md:text-h4 text-p">
            {translation.percentTotalVolume}
          </h4>
          <p className="md:text-p text-sm">
            {formatNumber(props.exchange.percentTotalVolume)}%
          </p>
        </div>
        {props.intent === "primary" ? (
          <>
            <div>
              <h4 className="text-slate-400 md:text-h4 text-p">
                {translation.volumeUsd}
              </h4>
              <p className="md:text-p text-sm">
                ${formatNumber(props.exchange.volumeUsd)}
              </p>
            </div>
            <div>
              <h4 className="text-slate-400 md:text-h4 text-p">
                {translation.tradingPairs}
              </h4>
              <p className="md:text-p text-sm">{props.exchange.tradingPairs}</p>
            </div>
          </>
        ) : null}
      </div>
      <div className={props.intent === "primary" ? "w-1/5" : ""}>
        <a
          className="rounded-md py-2 flex items-center font-medium gap-2 px-3 text-sm justify-center text-slate-800 bg-slate-100 hover:bg-slate-200"
          target="_blank"
          href={props.exchange.exchangeUrl}
        >
          {translation.exchangeUrl}
          <GoLinkExternal />
        </a>
      </div>
    </div>
  );
}

/*

Main => name, rank, percentTotalVolume, volumeUsd, tradingPaus, link
Secondary => name, rank, url, percentTotalVolume

*/

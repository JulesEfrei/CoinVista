import CryptoItemList from "@molecules/cryptoItemList/CryptoItemList";
import { getTranslation } from "./translation";
import CryptoItemListPlaceholder from "@molecules/cryptoItemList/CryptoItemListPlaceholder";

export default async function Home({ params }: { params: { lang: string } }) {
  const translation = await getTranslation(params.lang.split("-")[0]);

  const data = [
    {
      id: "bitcoin",
      rank: "1",
      symbol: "BTC",
      name: "Bitcoin",
      supply: "19658368.0000000000000000",
      maxSupply: "21000000.0000000000000000",
      marketCapUsd: "1320054071446.1660192663031936",
      volumeUsd24Hr: "19697212310.7765514548568254",
      priceUsd: "67149.7283724755798277",
      changePercent24Hr: "5.9293907462451852",
      vwap24Hr: "65787.4236163665288237",
      explorer: "https://blockchain.info/",
    },
    {
      id: "ethereum",
      rank: "2",
      symbol: "ETH",
      name: "Ethereum",
      supply: "120077426.1898597300000000",
      maxSupply: null,
      marketCapUsd: "424557306277.6888437236179939",
      volumeUsd24Hr: "11994479653.3345823680533943",
      priceUsd: "3535.6962565670129129",
      changePercent24Hr: "8.0684181235393057",
      vwap24Hr: "3415.6526150544916150",
      explorer: "https://etherscan.io/",
    },
    {
      id: "tether",
      rank: "3",
      symbol: "USDT",
      name: "Tether",
      supply: "103618183617.7160800000000000",
      maxSupply: null,
      marketCapUsd: "103716299512.8046541747901997",
      volumeUsd24Hr: "39531693430.7939518644986197",
      priceUsd: "1.0009468984271193",
      changePercent24Hr: "-0.0080426682689567",
      vwap24Hr: "1.0013751095705287",
      explorer: "https://www.omniexplorer.info/asset/31",
    },
    {
      id: "binance-coin",
      rank: "4",
      symbol: "BNB",
      name: "BNB",
      supply: "166801148.0000000000000000",
      maxSupply: "166801148.0000000000000000",
      marketCapUsd: "93318948504.2573366198477180",
      volumeUsd24Hr: "992603993.0904250030405803",
      priceUsd: "559.4622676353362785",
      changePercent24Hr: "5.3315848374832754",
      vwap24Hr: "540.6756514395795399",
      explorer:
        "https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    },
    {
      id: "solana",
      rank: "5",
      symbol: "SOL",
      name: "Solana",
      supply: "443884942.2473194000000000",
      maxSupply: null,
      marketCapUsd: "83934662740.9157022855296069",
      volumeUsd24Hr: "2845398660.2950968681702081",
      priceUsd: "189.0910340773619241",
      changePercent24Hr: "9.9976791976905703",
      vwap24Hr: "182.5807001875428799",
      explorer: "https://explorer.solana.com/",
    },
    {
      id: "usd-coin",
      rank: "6",
      symbol: "USDC",
      name: "USDC",
      supply: "31402000743.4583700000000000",
      maxSupply: null,
      marketCapUsd: "31435418374.5002719972769403",
      volumeUsd24Hr: "2446556468.7627047890903076",
      priceUsd: "1.0010641879577964",
      changePercent24Hr: "-0.0340336817068044",
      vwap24Hr: "1.0007135178782985",
      explorer:
        "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    },
    {
      id: "xrp",
      rank: "7",
      symbol: "XRP",
      name: "XRP",
      supply: "45404028640.0000000000000000",
      maxSupply: "100000000000.0000000000000000",
      marketCapUsd: "28113407882.2994880201315360",
      volumeUsd24Hr: "944722871.2731452849527211",
      priceUsd: "0.6191831148994599",
      changePercent24Hr: "4.1202194314085856",
      vwap24Hr: "0.6034051147385261",
      explorer: "https://xrpcharts.ripple.com/#/graph/",
    },
    {
      id: "cardano",
      rank: "8",
      symbol: "ADA",
      name: "Cardano",
      supply: "35565639551.8750000000000000",
      maxSupply: "45000000000.0000000000000000",
      marketCapUsd: "22506740927.6845341266447840",
      volumeUsd24Hr: "369096122.9963008308810609",
      priceUsd: "0.6328226122535168",
      changePercent24Hr: "3.8701809741595870",
      vwap24Hr: "0.6240590044004171",
      explorer: "https://cardanoexplorer.com/",
    },
  ];

  return (
    <>
      <h1>{translation.home.title}</h1>
      <div>
        {data.map((elm) => (
          <div className="w-full">
            {/* md:w-2/3 */}
            <CryptoItemListPlaceholder />
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

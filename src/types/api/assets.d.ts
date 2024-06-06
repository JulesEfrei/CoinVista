export interface apiDataAssetResponse {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface assetResponse extends apiDataAssetResponse {
  isSaved?: boolean;
}

export type apiAssetsResponse = {
  data: apiDataAssetResponse[];
  timestamp: string;
  error?: unknown;
};

export interface apiAssetResponse {
  data: apiDataAssetResponse;
  timestamp: string;
  error?: unknown;
}

export type assetsResponse = assetResponse[];

export type apiIntervalDate =
  | "m1"
  | "m5"
  | "m15"
  | "m30"
  | "h1"
  | "h2"
  | "h6"
  | "h12"
  | "d1";

export type intervalDate = "1H" | "1D" | "1W" | "1M" | "3M";

export interface apiAssetHistory {
  data: {
    priceUsd: string;
    time: Date;
  }[];
  timestamp: string;
  error?: unknown;
}

export interface apiMarketResult {
  exchangeId: string;
  baseId: string;
  quoteId: string;
  baseSymbol: string;
  quoteSymbol: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  volumePercent: string;
}

export interface apiMarkets {
  data: apiMarketResult[];
  timestamp: string;
  error?: unknown;
}

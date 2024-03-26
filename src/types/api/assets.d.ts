export interface apiAssetResponse {
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

export interface assetResponse extends apiAssetResponse {
  isSaved?: boolean;
}

export type apiAssetsResponse = {
  data: apiAssetResponse[];
  timestamp: string;
};

export type assetsResponse = assetResponse[];

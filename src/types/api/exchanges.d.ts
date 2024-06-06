export type exchange = {
  id: string;
  name: string;
  rank: string;
  percentTotalVolume: string;
  volumeUsd: string;
  tradingPairs: string;
  socket: boolean;
  exchangeUrl: string;
  updated: number;
};

export type exchangesApiResponse = {
  data: exchange[];
  timestamp: string;
  erro?: unknown;
};

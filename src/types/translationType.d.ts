export type translation = {
  cryptoField: {
    rank: string;
    name: string;
    priceUsd: string;
    supply: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    volumeUsd24Hr: string;
    maxSupply: string;
    marketCapUsd: string;
    bestExchange: string;
  };
  selectCryptoForm: {
    selectTitle: string;
    addField: string;
    removeField: string;
    submitTitle: string;
    none: string;
  };
  compare: {
    title: string;
    empty: string;
  };
  detail: {
    addToWatchList: string;
    chartTitle: string;
  };
  profile: {
    title: string;
    email: string;
    rmAccount: string;
    logout: string;
  };
  navigation: {
    home: string;
    compare: string;
    login: string;
    profile: string;
  };
  state: {
    loading: string;
    error: string;
  };
  auth: {
    title: string;
    email: string;
    codeSubmit: string;
    checkInbox: string;
    verifySubmit: string;
  };
  assetList: {
    maxPage: string;
  };
};

const NB_CRYPTO = 2296; //Manually set
const LIMIT = 10;

const getOffset = (page: number) => {
  return LIMIT * (page - 1);
};

export const getMaxPage = () => {
  return Math.ceil(NB_CRYPTO / LIMIT);
};

export const fetchSavedAssets = async (savedIds: string[]) => {
  const data = await fetch(
    `http://api.coincap.io/v2/assets?ids=${savedIds.join(",")}`,
    { cache: "force-cache" }
  );

  return data.json();
};

export const fetchAssets: (page: number) => any = async (page) => {
  const data = await fetch(
    `http://api.coincap.io/v2/assets?limit=${LIMIT}&offset=${getOffset(page)}`,
    { cache: "force-cache" }
  );

  return data.json();
};

export const fetchAllAssets: (limit: number) => any = async (limit) => {
  const data = await fetch(`http://api.coincap.io/v2/assets?limit=${limit}`, {
    cache: "force-cache",
  });

  return data.json();
};

export const fetchAsset: (cryptoId: string) => any = async (cryptoId) => {
  const data = await fetch(`http://api.coincap.io/v2/assets/${cryptoId}`, {
    cache: "force-cache",
  });

  return data.json();
};

export const fetchExchange: (cryptoId: string) => any = async (cryptoId) => {
  const data = await fetch(
    `http://api.coincap.io/v2/assets/${cryptoId}/markets`,
    {
      cache: "force-cache",
    }
  );

  return data.json();
};

export const fetchAssetHistory = async (
  cryptoId: string,
  interval: string,
  startTime: number,
  endTime: number
) => {
  const data = await fetch(
    `http://api.coincap.io/v2/assets/${cryptoId}/history?interval=${interval}&start=${startTime}&end=${endTime}`,
    {
      cache: "force-cache",
    }
  );

  return data.json();
};

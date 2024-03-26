const NB_CRYPTO = 2296; //Manually set
const LIMIT = 10;

const getOffset = (page) => {
  return LIMIT * (page - 1);
};

export const getMaxPage = () => {
  return Math.ceil(NB_CRYPTO / LIMIT);
};

const savedIds = async () => ["bitcoin", "uniswap", "polygon", "stellar"];

export const fetchSavedAssets = async () => {
  const s = await savedIds();

  const data = await fetch(
    `http://api.coincap.io/v2/assets?ids=${s.join(",")}}`,
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

export const formatNumber = (n) => {
  n = Number(n);
  if (n < 1e3) return Number(n).toPrecision(4);
  if (n >= 1e3 && n < 1e6) {
    const e = (n / 1e3).toString().split(".");
    return e[0] + " " + e[1].slice(0, 3) + "," + e[1].slice(3, 5);
  }
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
};

export const isPositive = (n) => Number(n) > 0;

export const isFire = (changePercent24Hr, rank) =>
  Number(changePercent24Hr) > 7 || Number(rank) <= 3;

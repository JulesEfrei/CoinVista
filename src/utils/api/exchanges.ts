export const fetchExchange: (cryptoId: string) => any = async (cryptoId) => {
  const data = await fetch(
    `http://api.coincap.io/v2/assets/${cryptoId}/markets`,
    {
      cache: "force-cache",
    }
  );

  return data.json();
};

export const fetchExchanges = async () => {
  const data = await fetch(`http://api.coincap.io/v2/exchanges`, {
    cache: "force-cache",
  });

  return data.json();
};

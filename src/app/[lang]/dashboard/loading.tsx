import CryptoItemListPlaceholder from "@molecules/cryptoItemList/CryptoItemListPlaceholder";

const Loading = () => {
  return (
    <>
      <section className="bg-gray-500 w-full h-[50dvh] animate-pulse"></section>
      <section className="mt-10 lg:px-20">
        <div className="grid grid-cols-11 px-3 py-2 text-sm xs:text-p rounded-md dark:bg-slate-900 bg-slate-100">
          <div className="col-span-4 xs:col-span-3 w-full grid grid-cols-subgrid items-center gap-2">
            <h4 className="col-span-2 xs:col-span-1">Rank</h4>
            <h4 className="col-span-2 xs:col-span-2">Name</h4>
          </div>

          <div className="col-span-4 xs:col-span-6 w-full grid grid-cols-subgrid items-center">
            <h4 className="col-span-4 xs:col-span-2 text-center">Price</h4>
            <h4 className="xs:col-span-2 text-center hidden xs:block">
              Supply
            </h4>
            <h4 className="text-center hidden xs:block">VWAP (24hr)</h4>
          </div>

          <div className="col-span-3 xs:col-span-2 flex items-center justify-end gap-3">
            <h4>Change (24hr)</h4>
          </div>
        </div>

        {Array(10)
          .fill({})
          .map((elm, index) => (
            <CryptoItemListPlaceholder key={index} />
          ))}
      </section>
    </>
  );
};

export default Loading;

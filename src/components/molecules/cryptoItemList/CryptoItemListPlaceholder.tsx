const CryptoItemListPlaceholder = () => {
  return (
    <div className="grid grid-cols-11 px-3 py-2 text-sm xs:text-p animate-pulse">
      <div className="col-span-3 w-full grid grid-cols-subgrid items-center gap-2">
        <div className="col-span-1 flex items-center gap-3">
          <h3 className="text-slate-400 bg-gray-500 h-full rounded-md w-1/2"></h3>
          <div className="bg-gray-500 w-4 sm:w-6 h-4 sm:h-6 rounded-full"></div>
        </div>
        <div className="col-span-2 w-full">
          <h3 className="bg-gray-500 h-full rounded-md w-1/2"></h3>
          <div className="flex items-center">
            <h4 className="mr-1 text-slate-400 bg-gray-500 h-full rounded-md w-1/2"></h4>
          </div>
        </div>
      </div>

      <div className="col-span-5 xs:col-span-6 w-full grid grid-cols-subgrid items-center">
        <p className="col-span-3 xs:col-span-2 text-center bg-gray-500 h-full rounded-md w-1/2"></p>
        <p className="col-span-2 xs:col-span-2 text-center bg-gray-500 h-full rounded-md w-1/2"></p>
        <p className="xs:col-span-2 text-center hidden xs:block bg-gray-500 h-full rounded-md w-1/2"></p>
      </div>

      <div className="col-span-3 xs:col-span-2 flex items-center justify-end gap-3">
        <h4 className="bg-gray-500 h-full rounded-md w-1/2"></h4>
      </div>
    </div>
  );
};

export default CryptoItemListPlaceholder;

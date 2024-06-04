import StyledLink from "@atoms/StyledLink";
import CryptoItemList from "@molecules/cryptoItemList/CryptoItemList";
import type { assetResponse } from "@customTypes/api/assets";
import type { translation } from "@customTypes/translationType";
import { getMaxPage } from "@utils/api/assets";

const AssetsList = ({
  list,
  page,
  translation,
  user,
}: {
  list: assetResponse[];
  page: number;
  translation: translation;
  user?: any | null;
}) => {
  return (
    <>
      <div className="grid grid-cols-11 px-3 py-2 text-sm xs:text-p rounded-md dark:bg-slate-900 bg-slate-100">
        <div className="col-span-4 xs:col-span-3 w-full grid grid-cols-subgrid items-center gap-2">
          <h4 className="col-span-2 xs:col-span-1">
            {translation.cryptoField.rank}
          </h4>
          <h4 className="col-span-2 xs:col-span-2">
            {translation.cryptoField.name}
          </h4>
        </div>

        <div className="col-span-4 xs:col-span-6 w-full grid grid-cols-subgrid items-center">
          <h4 className="col-span-4 xs:col-span-2 text-center">
            {translation.cryptoField.priceUsd}
          </h4>
          <h4 className="xs:col-span-2 text-center hidden xs:block">
            {translation.cryptoField.supply}
          </h4>
          <h4 className="xs:col-span-2 text-center hidden xs:block">
            {translation.cryptoField.changePercent24Hr}
          </h4>
        </div>

        <div className="col-span-3 xs:col-span-2 flex items-center justify-end gap-3">
          <h4>{translation.cryptoField.vwap24Hr}</h4>
        </div>
      </div>

      {list.map((elm) => (
        <CryptoItemList crypto={elm} key={elm.id} user={user} />
      ))}

      <div className="flex items-center gap-3 float-end mb-7">
        {page > 1 ? (
          <StyledLink
            intent="light"
            size="sm"
            href={`/dashboard?page=${page - 1}`}
          >
            {page - 1}
          </StyledLink>
        ) : null}
        <StyledLink
          intent="disabled"
          size="sm"
          href={`/dashboard?page=${page}`}
        >
          {page}
        </StyledLink>
        {page < getMaxPage() ? (
          <StyledLink
            intent="light"
            size="sm"
            href={`/dashboard?page=${page + 1}`}
          >
            {page + 1}
          </StyledLink>
        ) : null}

        <p className="text-sm text-slate-400">
          {translation.assetList.maxPage}: {getMaxPage()}
        </p>
      </div>
    </>
  );
};

export default AssetsList;

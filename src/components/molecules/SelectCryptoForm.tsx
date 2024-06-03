"use client";
import Button from "@atoms/Button";
import { apiDataAssetResponse } from "@type/api/assets";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function SelectCryptoForm({
  defaultValues,
  cryptoList,
}: {
  defaultValues: string[];
  cryptoList: apiDataAssetResponse[];
}) {
  const router = useRouter();

  const [nChoice, setNChoice] = useState<number>(
    defaultValues.length <= 2
      ? 2
      : defaultValues.length >= 4
      ? 4
      : defaultValues.length
  );

  const cryptoOne = useRef<HTMLSelectElement>(null);
  const cryptoTwo = useRef<HTMLSelectElement>(null);
  const cryptoThree = useRef<HTMLSelectElement>(null);
  const cryptoFour = useRef<HTMLSelectElement>(null);

  const refIndex = [cryptoOne, cryptoTwo, cryptoThree, cryptoFour];

  const redirect = () => {
    const ids = Array(nChoice)
      .fill(null)
      .map((elm, index) => "ids=" + refIndex[index].current.value)
      .join("&");

    router.push("compare?" + ids);
  };

  return (
    <div className="p-5 flex flex-col h-full gap-5">
      <h2 className="text-lead font-bold">Select crypto</h2>
      <form className="flex flex-col gap-10 items-center justify-center h-full">
        {Array(nChoice)
          .fill(null)
          .map((select, index) => (
            <div className="flex flex-col w-full" key={index}>
              <label htmlFor={"crypto-" + index}>Crypto {index + 1}</label>
              <select
                ref={refIndex[index]}
                name={"crypto-" + index}
                id={"crypto-" + index}
                className={
                  "py-1 px-2 border rounded-md border-slate-500 bg-white text-black focus:border-slate-700 focus:border-2 dark:bg-black dark:text-white placeholder:text-gray-500 dark:border-gray-500"
                }
              >
                <option value="">Aucun</option>
                {cryptoList
                  ? cryptoList.map((elm, i) => (
                      <option
                        value={elm.id}
                        selected={elm.id === defaultValues[index]}
                        key={`${elm.id}-${i}`}
                      >
                        {elm.name}
                      </option>
                    ))
                  : null}
              </select>
            </div>
          ))}
        <div className="flex gap-3">
          <Button
            disabled={nChoice === 2}
            onClick={() => setNChoice((curr) => curr - 1)}
            size="sm"
          >
            Remove field
          </Button>
          <Button
            disabled={nChoice === 4}
            onClick={() => setNChoice((curr) => curr + 1)}
            size="md"
          >
            Add field
          </Button>
        </div>
        <Button onClick={redirect}>Load</Button>
      </form>
    </div>
  );
}

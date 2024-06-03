"use client";
import Button from "@atoms/Button";
import type { apiDataAssetResponse } from "@customTypes/api/assets";
import type { translation } from "@customTypes/translationType";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function SelectCryptoForm({
  defaultValues,
  cryptoList,
  translation,
}: {
  defaultValues: string[] | null;
  cryptoList: apiDataAssetResponse[];
  translation: translation;
}) {
  const router = useRouter();

  const [nChoice, setNChoice] = useState<number>(
    defaultValues === null
      ? 2
      : defaultValues.length <= 2
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
    const ids = Array(
      refIndex.reduce((prev, curr) => {
        return curr.current !== null && curr.current?.value !== ""
          ? prev + 1
          : prev;
      }, 0)
    )
      .fill(null)
      .map((elm, index) => "ids=" + refIndex[index].current?.value)
      .join("&");

    router.push("compare?" + ids);
  };

  return (
    <div className="p-5 flex flex-col h-full gap-5">
      <h2 className="text-lead font-bold">
        {translation.selectCryptoForm.selectTitle}
      </h2>
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
                <option value="">{translation.selectCryptoForm.none}</option>
                {cryptoList
                  ? cryptoList.map((elm, i) => (
                      <option
                        value={elm.id}
                        selected={
                          defaultValues === null
                            ? false
                            : elm.id === defaultValues[index]
                        }
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
            {translation.selectCryptoForm.removeField}
          </Button>
          <Button
            disabled={nChoice === 4}
            onClick={() => setNChoice((curr) => curr + 1)}
            size="md"
          >
            {translation.selectCryptoForm.addField}
          </Button>
        </div>
        <Button onClick={redirect}>
          {translation.selectCryptoForm.submitTitle}
        </Button>
      </form>
    </div>
  );
}

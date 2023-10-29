"use client";

import { useEffect, useState } from "react";
import { searchCoins } from "@/utils/coinSearch";
import Link from "next/link";
import Image from "next/image";

type listedCoins = {
  id: number;
  name: string;
  thumb: string;
  symbol: string;
};

function CoinSearch() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    searchCoins("").then((coinList) => setResults(coinList));
  }, []);
  return (
    <div className="w-full flex flex-col gap-4">
      <input
        type="text"
        onChange={async (e) => setResults(await searchCoins(e.target.value))}
        placeholder="Search"
        className="py-2 px-4  bg-slate-100 rounded-full max-w-md focus:outline-none"
      />
      <div className="flex flex-col">
        {results.slice(0, 10).map((item: listedCoins, index) => {
          return (
            <Link href={"/search/" + item.id} key={item.name}>
              <div
                key={index}
                className="flex w-full justify-between items-center border-b-2 py-4 px-8"
              >
                <div className="flex items-center gap-1">
                  <p className="pr-2 opacity-50">{index + 1}</p>
                  <img src={item.thumb} alt={item.name} />
                  <p>{item.name}</p>
                </div>
                <p>({item.symbol})</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CoinSearch;

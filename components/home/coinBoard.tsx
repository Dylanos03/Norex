"use client";

import homeStore from "@/utils/homeStore";
import { useEffect } from "react";

type coinType = {
  symbol: string;
  priceUsd: number;
};

function CoinBoard() {
  const store = homeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div className="w-max flex relative bg-gray-900 text-white h-12 items-center overflow-x-hidden">
      <div className="flex w-screen animate-sliding overflow-hidden">
        <p>Trending</p>
        {store.coins.map((item: coinType) => {
          return (
            <p className="pl-48">
              {item.symbol}
              <span className="pl-1">${item.priceUsd}</span>
            </p>
          );
        })}
      </div>
      <div className="flex w-screen animate-sliding overflow-hidden">
        <p>Trending</p>
        {store.coins.map((item: coinType) => {
          return (
            <p className="pl-48">
              {item.symbol}
              <span className="pl-1">${item.priceUsd}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default CoinBoard;

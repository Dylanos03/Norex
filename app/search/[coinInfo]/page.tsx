"use client";

import { useState, useEffect } from "react";
import { coinDetailsFetch } from "@/utils/coinDetailsFetch";
import Image from "next/image";

import HistoryGraph from "@/components/coinInfo/historyGraph";
import Link from "next/link";

type coinDataType = {
  name: string;
  price: number;
  image: string;
  symbol: string;
  desc: string;
  priceChange: coinChangeType[];
};

type coinChangeType = {
  key: string;
  change: number;
};

function CoinInfo({ params }: { params: { coinInfo: string } }) {
  const [coinData, setCoinData] = useState<coinDataType>({
    name: "",
    price: 0,
    image: "",
    symbol: "",
    desc: "",
    priceChange: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function gettingData() {
      const data = await coinDetailsFetch(params.coinInfo);

      setCoinData(data);

      setIsLoading(false);
    }
    gettingData();
  }, [params.coinInfo]);
  return (
    <>
      <div className="py-24 flex flex-col px-6">
        <div className="flex items-center gap-4">
          <Link href={"/search"}>Back</Link>
          <h1 className="text-3xl font-extrabold">{coinData.name}</h1>
        </div>

        <div className="flex justify-center">
          <HistoryGraph coinID={params.coinInfo} />
        </div>
        {isLoading ? (
          <div className="flex gap-4 justify-center items-center">
            <div>
              <div className="w-64 h-64 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-4xl overflow-hidden">Loading...</h1>
              <div className="w-32 h-6 bg-gray-300 rounded-sm animate-pulse"></div>
              <h3>Price Change</h3>
              <div className="flex gap-4 w-[500px] bg-gray-300 h-6 rounded-sm animate-pulse"></div>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 justify-center items-center py-20 ">
            <div className="flex flex-col gap-1">
              <img src={coinData.image} alt={coinData.name} className="w-16" />
              <h1 className="font-bold text-4xl overflow-hidden">
                {coinData.name}
              </h1>
              <p className="text-green-500">${coinData.price}</p>
              <h3 className="font-semibold text-xl">Price Change:</h3>
              <div className="flex gap-4">
                {coinData.priceChange.map((item, index) => {
                  return (
                    <p key={index}>
                      {item.key}:{" "}
                      <span
                        className={
                          item.change > 0 ? "text-green-600" : "text-red-600"
                        }
                      >
                        {item.change}%
                      </span>
                    </p>
                  );
                })}
              </div>
              <h4 className="font-semibold text-xl">Coin description:</h4>
              <p className="max-w-5xl">{coinData.desc}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CoinInfo;

"use client";

import { useState, useEffect } from "react";
import { coinDetailsFetch } from "@/utils/coinDetailsFetch";
import Image from "next/image";

import HistoryGraph from "@/components/coinInfo/historyGraph";
import Link from "next/link";
import LoadingSpinner from "@/components/global/loadingSpinner";
import parse from "html-react-parser";

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
      <div className="flex flex-col w-full max-w-6xl my-14 m-auto">
        <div className="flex items-center gap-4">
          <Link href={"/search"} className="font-bold text-2xl">
            {"<"}
          </Link>
          <img src={coinData.image} alt={coinData.name} className="w-16" />
          <h1 className="font-bold text-2xl">{coinData.name}</h1>
        </div>
        <div className="w-full flex gap-4">
          <HistoryGraph coinID={params.coinInfo} />
          <div className="lg:w-1/3 flex flex-col bg-slate-100 p-8 rounded-2xl justify-between">
            <h2 className="font-semibold text-xl">
              Price <span className="text-green-700">${coinData.price}</span>
            </h2>
            <h3 className="font-semibold">Price Change:</h3>
            {coinData.priceChange.map((item) => {
              return (
                <p>
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
        </div>
        <div>
          <h3 className="font-bold text-2xl">Description</h3>
          {parse(coinData.desc)}
        </div>
      </div>
    </>
  );
}

export default CoinInfo;

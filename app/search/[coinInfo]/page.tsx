"use client";

import { useState, useEffect } from "react";
import { coinDetailsFetch } from "@/utils/coinDetailsFetch";
import Image from "next/image";

import HistoryGraph from "@/components/coinInfo/historyGraph";
import Link from "next/link";
import LoadingSpinner from "@/components/global/loadingSpinner";

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
          <img src={coinData.image} alt={coinData.name} className="w-16" />
          <h1 className="font-bold text-2xl">{coinData.name}</h1>
        </div>
        <div className="w-full flex gap-4">
          <HistoryGraph coinID={params.coinInfo} />
          <div className="lg:w-1/3">
            <h2 className="font-semibold text-xl">
              Price <span className="text-green-700">${coinData.price}</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinInfo;

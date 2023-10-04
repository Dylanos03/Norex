"use client";

import { useState, useEffect } from "react";
import { coinDetailsFetch } from "@/utils/coinDetailsFetch";

type coinDataType = {
  name: string;
  price: number;
  image: string;
  symbol: string;
  desc: string;
  priceChange: [];
};

function CoinInfo({ params }: { params: { coinInfo: string } }) {
  const [coinData, setCoinData] = useState<coinDataType>({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function gettingData() {
      const data = await coinDetailsFetch(params.coinInfo);
      setCoinData(data);
      setIsLoading(false);
    }
    gettingData();
  }, []);
  return (
    <>
      <div className="py-24">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="flex gap-4 justify-center items-center">
            <div>
              <img src={coinData.image} alt={coinData.name} />
            </div>
            <div>
              <h1 className="font-bold text-4xl overflow-hidden">
                {coinData.name}
              </h1>
              <p>${coinData.price}</p>
              <h3>Price Change</h3>
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
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CoinInfo;

import CoinBio from "./coinBio";
type coinType = {
  name?: string;
  priceUSD?: number;
  icon?: string;
  symbol?: string;
};

function TopCoin({ coinData }: { coinData: [] }) {
  return (
    <div className="w-full flex justify-center my-16">
      <div className="max-w-7xl flex gap-12 items-center justify-between">
        <div>
          {coinData.slice(0, 1).map((item: coinType) => {
            return (
              <CoinBio
                coinName={item.name!}
                coinPriceUSD={item.priceUSD!}
                coinIcon={item.icon!}
                topCoin={true}
                coinSymbol={item.symbol!}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          {coinData.slice(1, 3).map((item: coinType) => {
            return (
              <CoinBio
                coinName={item.name!}
                coinPriceUSD={item.priceUSD!}
                coinIcon={item.icon!}
                topCoin={false}
                coinSymbol={item.symbol!}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopCoin;

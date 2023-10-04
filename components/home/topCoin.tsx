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
      <div className="max-w-7xl flex-col flex gap-12 justify-between">
        <h2 className="font-bold text-4xl overflow-hidden">
          Top ranking coins
        </h2>
        <div className="flex gap-16">
          {coinData.slice(0, 1).map((item: coinType) => {
            return (
              <CoinBio
                key={item.name}
                coinName={item.name!}
                coinPriceUSD={item.priceUSD!}
                coinIcon={item.icon!}
                topCoin={true}
                coinSymbol={item.symbol!}
              />
            );
          })}

          {coinData.slice(1, 3).map((item: coinType) => {
            return (
              <CoinBio
                key={item.name}
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

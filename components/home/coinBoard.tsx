type coinType = {
  coinData: [];
  symbol?: string;
  priceUsd?: number;
};

function CoinBoard(coinData: coinType) {
  return (
    <div className="w-max flex gap-8 relative bg-gray-900 text-white h-12 items-center ">
      <div className="flex gap-8  animate-sliding ">
        <p>Trending</p>
        {coinData.map((item: coinType) => {
          return (
            <p className="overflow-visible" key={item.symbol}>
              {item.symbol}
              <span className="pl-1">${item.priceUsd}</span>
            </p>
          );
        })}
      </div>
      <div className="flex gap-8  animate-sliding ">
        <p>Trending</p>
        {store.coins.map((item: coinType) => {
          return (
            <p className="overflow-visible" key={item.symbol}>
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

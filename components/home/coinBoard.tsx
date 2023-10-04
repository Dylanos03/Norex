type coinType = {
  name?: string;
  priceUSD?: number;
};

function CoinBoard({ coinData }: { coinData: [] }) {
  return (
    <div className="w-max flex gap-8 relative bg-gray-900 text-white h-12 items-center ">
      <div className="flex gap-8 lg:gap-16 animate-sliding ">
        <p className="text-green-500">Trending</p>
        {coinData.map((item: coinType) => {
          return (
            <p className="overflow-visible" key={item.name}>
              {item.name}
              <span className="pl-1">${item.priceUSD}</span>
            </p>
          );
        })}
      </div>
      <div className="flex gap-8 lg:gap-16 animate-sliding ">
        <p className="text-green-500">Trending</p>
        {coinData.map((item: coinType) => {
          return (
            <p className="overflow-visible" key={item.name}>
              {item.name}
              <span className="pl-1">${item.priceUSD}</span>
            </p>
          );
        })}
      </div>
      <div className="flex gap-8 lg:gap-16 animate-sliding ">
        <p className="text-green-500">Trending</p>
        {coinData.map((item: coinType) => {
          return (
            <p className="overflow-visible" key={item.name}>
              {item.name}
              <span className="pl-1">${item.priceUSD}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default CoinBoard;

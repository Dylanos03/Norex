type coinDataType = {
  coinName: string;
  coinPriceUSD: number;
  coinIcon: string;
  topCoin: boolean;
  coinSymbol: string;
};

function CoinBio(props: coinDataType) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <div className={"px-10 py-16 bg-slate-50 rounded-sm"}>
          <img src={props.coinIcon} alt={props.coinName} />
        </div>
        <div className="flex flex-col gap-1">
          {props.topCoin && (
            <h3 className="text-blue-500">- Our top coin today</h3>
          )}
          <h2 className="text-lg font-bold">
            {props.coinName} ({props.coinSymbol})
          </h2>
          <p className="">${props.coinPriceUSD}</p>
          <div className="flex gap-1">
            <a href="/" className="bg-blue-600 text-white px-3 py-1 rounded-sm">
              Buy
            </a>
            <a
              href="/"
              className="border-blue-600 text-blue-600 px-3 py-1 rounded-sm"
            >
              Sell
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinBio;

interface TopCoinProps {
  coinData: object;
}

function TopCoin(coinData: TopCoinProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl"></div>
    </div>
  );
}

export default TopCoin;

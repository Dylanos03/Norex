import CoinBio from "./coinBio";

function TopCoin({ coinData }: { coinData: [] }) {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl">
        <CoinBio thisCoinData={coinData[0]} />
      </div>
    </div>
  );
}

export default TopCoin;

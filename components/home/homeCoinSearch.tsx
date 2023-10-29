import CoinSearch from "../global/coinSearch";

function HomeCoinSearch() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-full max-w-7xl px-4">
          <h2 className="font-bold text-4xl overflow-hidden pb-8">
            Search for a coin
          </h2>
          <CoinSearch />
        </div>
      </div>
    </>
  );
}

export default HomeCoinSearch;

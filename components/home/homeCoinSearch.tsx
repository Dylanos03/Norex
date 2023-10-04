import CoinSearch from "../global/coinSearch";

function HomeCoinSearch() {
  return (
    <>
      <div className="w-full flex ">
        <div className="flex max-w-7xl px-4 flex-col">
          <h2 className="font-bold text-4xl overflow-hidden">
            Search for a coin
          </h2>
          <CoinSearch />
        </div>
      </div>
    </>
  );
}

export default HomeCoinSearch;

import CoinSearch from "@/components/global/coinSearch";

function SearchPage() {
  return (
    <div className="flex flex-col items-center px-4">
      <div className="my-24 w-full max-w-5xl  flex flex-col gap-4">
        <h1 className="font-bold text-4xl overflow-hidden flex justify-center">
          Search for a coin
        </h1>
        <CoinSearch />
      </div>
    </div>
  );
}

export default SearchPage;

import Hero from "@/components/home/hero";
import CoinBoard from "@/components/home/coinBoard";
import TopCoin from "@/components/home/topCoin";
import getCoins from "@/utils/coinStore";
import HomeCoinSearch from "@/components/home/homeCoinSearch";

import NftHome from "@/components/home/nftHome";

export default async function Home() {
  const data: [] = await getCoins();

  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 text-black dark:text-white">
      <Hero />
      <CoinBoard coinData={data} />
      <TopCoin coinData={data} />
      <HomeCoinSearch />
      <NftHome />
    </div>
  );
}

import Hero from "@/components/home/hero";
import CoinBoard from "@/components/home/coinBoard";
import TopCoin from "@/components/home/topCoin";
import getCoins from "@/utils/coinStore";
import HomeCoinSearch from "@/components/home/homeCoinSearch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default async function Home() {
  const data: [] = await getCoins();

  return (
    <>
      <Hero />
      <CoinBoard coinData={data} />
      <TopCoin coinData={data} />
      <HomeCoinSearch />
    </>
  );
}

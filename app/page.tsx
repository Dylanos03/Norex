import Hero from "@/components/home/hero";
import CoinBoard from "@/components/home/coinBoard";
import TopCoin from "@/components/home/topCoin";
import getCoins from "@/utils/coinStore";

export default async function Home() {
  const data: [] = await getCoins();

  return (
    <>
      <Hero />
      <CoinBoard coinData={data} />
      <TopCoin coinData={data} />
    </>
  );
}

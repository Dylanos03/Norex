export default async function getCoins() {
  let coinArray = [];
  const results = await fetch(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  const data = await results.json();
  coinArray = data.coins;
  return coinArray;
}

type inputType = string;

export async function searchCoins(input: inputType) {
  if (input === "") {
    input = "b";
  }
  const response = await fetch(
    "https://api.coingecko.com/api/v3/search?query=" + input
  );
  const resJson = await response.json();
  const listedCoins = await resJson.coins;
  return listedCoins;
}

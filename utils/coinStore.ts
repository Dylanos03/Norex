interface coinType {
  item: coinObjectType;
}

interface coinObjectType {
  name: string;
  price_btc: number;
  small: string;
  symbol: string;
}

export default async function getCoins() {
  let coinArray = [];

  const results = await fetch(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  const exchangeRates = await fetch(
    "https://api.coingecko.com/api/v3/exchange_rates"
  );
  const exchangeRatesJson = await exchangeRates.json();
  const btcPriceUsd = await exchangeRatesJson.rates.usd.value;
  const data = await results.json();
  coinArray = await data.coins.map((coins: coinType) => {
    return {
      symbol: coins.item.symbol,
      name: coins.item.name,
      priceUSD: (coins.item.price_btc * btcPriceUsd).toPrecision(7),
      icon: coins.item.small,
    };
  });

  return coinArray;
}

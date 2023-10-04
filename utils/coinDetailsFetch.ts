export async function coinDetailsFetch(coinID: string) {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/" + coinID
  );
  const resJson = await response.json();

  return {
    name: resJson.name,
    symbol: resJson.symbol,
    desc: resJson.description.en,
    image: resJson.image.large,
    price: resJson.market_data.current_price.usd,
    priceChange: [
      {
        change: resJson.market_data.price_change_percentage_24h_in_currency.usd,
        key: "24hr",
      },
      {
        change: resJson.market_data.price_change_percentage_7d_in_currency.usd,
        key: "7d",
      },
      {
        change: resJson.market_data.price_change_percentage_14d_in_currency.usd,
        key: "14d",
      },
      {
        change: resJson.market_data.price_change_percentage_30d_in_currency.usd,
        key: "30d",
      },
    ],
    priceChange24hr:
      resJson.market_data.price_change_percentage_24h_in_currency.usd,
    priceChange7d:
      resJson.market_data.price_change_percentage_7d_in_currency.usd,
    priceChange14d:
      resJson.market_data.price_change_percentage_14d_in_currency.usd,
    priceChange30d:
      resJson.market_data.price_change_percentage_30d_in_currency.usd,
  };
}

export async function coinHistoryFetch(
  coinID: string,
  numberOfDays: number | string
) {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=max`
  );
  const resJson = await response.json();
  const historyData = await resJson.prices.map((item: number[]) => {
    const [date, price] = item;
    const newDate = new Date(date).toLocaleDateString("en-UK");
    return { price: price, date: newDate };
  });
  console.log(historyData);
  return historyData;
}

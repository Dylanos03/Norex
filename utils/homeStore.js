import axios from "axios";
import { create } from "zustand";

const homeStore = create((set) => ({
  coins: [],

  fetchCoins: async () => {
    const [res, btcRes] = await Promise.all([
      axios.get("https://api.coingecko.com/api/v3/search/trending"),
      axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      ),
    ]);

    const btcPrice = btcRes.data.bitcoin.usd;

    const coins = res.data.coins.map((coin) => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc,
        priceUsd: (coin.item.price_btc * btcPrice).toPrecision(7),
        symbol: coin.item.symbol,
      };
    });

    set({ coins });
  },
}));

export default homeStore;

import axios from "axios";
import { name } from "ejs";

async function getCryptoCoins(coinsNumber = 10) {
    try {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets",
            {
                params: {
                    vs_currency: "usd",
                    order: "market_cap_desc",
                    per_page: coinsNumber,
                    page: 1,
                    sparkline: false,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}
let data = await getCryptoCoins();

let foundName = data.find(coin => coin.name === "Bitcoin").id; 
console.log(foundName);
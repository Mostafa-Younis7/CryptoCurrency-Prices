import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const first100Coins = await getCryptoCoins(100);

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

app.get('/',async (req, res) => {
   try {
        const response = await getCryptoCoins();
        res.render("index.ejs", {
            data : response
        });

    } catch(error) {
         res.render("index.ejs", {error: error.message})
    }
})

app.post('/search',async (req, res) => {
    const coinName = req.body.coinName;
    let searchCoinId = first100Coins.find(coin => coin.name === coinName).id;
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${searchCoinId}`);
        let coin = response.data;
        coin = [{
            name : coin.name,
            current_price : coin.market_data.current_price.usd,
            image: coin.image.large
        }]
        res.render("index.ejs", {data : coin});
    } catch (error) {
        res.render("index.ejs", {error: error.message})
    }
});

app.listen(port, () => {
  console.log(`the app is listening on port ${port}`)
})
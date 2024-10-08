const axios = require("axios");
const express = require("express");
const port = 3000;
const app = express()

app.use(express.json());

const API_KEY = require('./keys')
app.get('/clima', async (req, res) => {
    const { cidade } = req.query
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${fe3c67b3ad254edca02f16eacd96bf8a}&units=metric`)
    let clima = resonse.data
    res.json({clima})
});

/*axios
    .get("https://api.example.com/data")
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));

const axios = require("axios");

const {cidade} = req.params

async function clima() {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${fe3c67b3ad254edca02f16eacd96bf8a}&units=metric`
        );

        console.log(`informações do clima na cidade: ${res.params}`);
    } catch (error) {
        console.error("Erro ao coletar os dados:", error.message);
    }
}*/
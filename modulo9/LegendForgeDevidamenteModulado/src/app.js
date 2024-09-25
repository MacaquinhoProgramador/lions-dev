const routesFichas = require("./routes/routesFichas");
const express = require("express");

const app = express();
app.use(express.json());

app.use('/fichas',routesFichas);

module.exports = app;
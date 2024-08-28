const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Boas-vindas ao meu site');
});

app.get('/sobre', (req, res) => {
    res.send('Este site é uma atividade');
});

app.use('/', (req, res) => {
    res.status(404).send('Ocorreu um erro ao inicializar a página, por favor verifique se o endereço está certo. ERRO: 404');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
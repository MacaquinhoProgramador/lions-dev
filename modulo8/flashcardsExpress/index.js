// Inicializando o Servidor

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const criarBaralho = require('./baralho/criarBaralho');
app.post('/baralho', criarBaralho);

app.get('/', (req, res) => {
    res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const listarBaralhos = require('./baralho/listarBaralhos');
app.get('/baralho', listarBaralhos);

const atualizarBaralho = require('./baralho/atualizarBaralho');
app.put('/baralho/:id', atualizarBaralho);

const deletarBaralho = require('./baralho/deletarBaralho');
app.delete('/baralho/:id', deletarBaralho);
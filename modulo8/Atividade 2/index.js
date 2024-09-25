const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) =>  {
    res.send('Servidor funfando!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
});

app.listen(port, () => {
    console.log(`O servidor ta em funegamento em http://localhost: ${port}`);
});

const cadastrarProduto = require('./produtos/post');
app.post('/produtos', cadastrarProduto);

const listarProdutos = require('./produtos/get');
app.get('/produtos', listarProdutos);

const atualizarProduto = require('./produtos/put');
app.put('/produtos/:id', atualizarProduto);

const deletarProduto = require('./produtos/delete');
app.delete('/produtos/:id', deletarProduto);

const buscarProduto = require('./produtos/getBusca');
app.get('/produtos/:nome', buscarProduto);
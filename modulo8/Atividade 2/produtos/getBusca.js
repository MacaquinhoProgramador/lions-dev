const { produto } = require('../data');

const buscarProduto = (req, res) => {
    const { nome } = req.params;

    const resultados = produto.filter(produto => produto.nome === nome);

    if (resultados.lenght != 0) {
        resultados.forEach(produto => {
            res.status(200).send(produto);
        })
    }else {
        res.status(401).send('Produto não encontrado');
    }
}

module.exports = buscarProduto
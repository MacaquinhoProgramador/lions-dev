
const { produto } = require('../data');

const listarProdutos = (req, res) => {
    res.status(200).send(produto);
}

module.exports = listarProdutos;
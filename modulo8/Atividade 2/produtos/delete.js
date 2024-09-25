const { produto } = require('../data');

const deletarProduto = (req, res) => {
    const { id } = req.params;
    const index = produto.findIndex((b) => b.id == id);

    const produtoDeletado = produto.splice(index, 1)[0];

    res.status(200).send({
        message: 'Produto deletado com sucesso!',
        produto: produtoDeletado
    });
}

module.exports = deletarProduto;
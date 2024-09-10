const { produto } = require('../data');

function cadastrarProduto(req, res) {
    console.log(req.body);
    const novoProduto = {
            "id": produto.length + 1,
            "nome": req.body.nome,
            "categoria": req.body.categoria,
            "preco": req.body.preco,
            "estoque": req.body.estoque
    };
    produto.push(novoProduto);
    res.status(201).send({message: 'cadastrado novo produtos.', produto, novoProduto});
}

module.exports = cadastrarProduto;
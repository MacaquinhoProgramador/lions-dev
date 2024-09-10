const { produto } = require('../data');

const atualizarProduto = (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    const novoNome = req.body.nome;
    const novaCategoria = req.body.categoria;
    const novoPreco = req.body.preco;
    const novoEstoque = req.body.estoque;
   
    const produtoId = produto.find((b) => b.id == id);
    
    produtoId.nome = novoNome;
    produtoId.categoria = novaCategoria;
    produtoId.preco = novoPreco;
    produtoId.estoque = novoEstoque;
    res.status(200).send({message: 'produto coiseado com sucesso!', produto: produto});
}

module.exports = atualizarProduto;
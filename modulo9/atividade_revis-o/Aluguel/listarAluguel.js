const { alugueis } = require('../data');

async function listarAlugeis(req, res) {
    try {
        return await alugueis.find();
    } catch (error) {
        console.error("Erro ao obter os alugays", erro);
        throw erro;
    }
};

module.exports = listarAlugeis;


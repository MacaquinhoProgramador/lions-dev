let { baralhos } = require('./data');

function atualizarBaralho(id, novoBaralho) {
    let index = baralhos.findIndex(baralho => baralho.id === id);
    baralhos[index] = novoBaralho;
}

module.exports = atualizarBaralho;
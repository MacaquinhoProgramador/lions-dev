let { baralhos } = require('../data');

function deletarBaralho(id) {
    let index = baralhos.findIndex(baralho => baralho.id === id);
    baralhos.splice(indexBaralho, 1);
}

module.exports = deletarBaralho;
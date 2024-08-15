let {baralhos} = require('./data');

function listarBaralhos() {
    baralhos.forEach((baralho, index) => {
    console.log(`Id: ${baralho.id}, Titulo: ${baralho.titulo}`);
    });
}

module.exports = listarBaralhos;
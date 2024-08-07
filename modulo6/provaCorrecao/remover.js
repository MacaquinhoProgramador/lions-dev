const prompt = require('prompt-sync')();
const { listarResidencias } = require("./listar")

function removerResidencia(residencias){
    listarResidencias(residencias);
    var escolha = prompt('Digite qual residencia deseja remover: ');
    if(escolha > 0 && escolha <= residencias.length){
        escolha--;
        residencias.splice(escolha, 1);
        console.log('Residência removida com sucesso!');
    }else {
        console.error('Valor incorreto!');
    }
}

module.exports = { removerResidencia }
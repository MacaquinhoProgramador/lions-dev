const { listarContatos } = require('./listar');
const prompt = require('prompt-sync')();

function removerContato(contatos){
    if (posicao < 0 || posicao >= contatos.length) {
        console.log('Contato inexistente!')
        removerContato()
    }else{
        listarContatos(contatos);
        var posicao = prompt('Digite qual contato deseja remover: ')
        parseInt(posicao--)
        contatos.splice(posicao, 1)
        console.log(`contato removido com sucesso`)
    }
}

module.exports = { removerContato }
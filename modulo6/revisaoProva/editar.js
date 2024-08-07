const { listarContatos } = require('./listar');

const prompt = require('prompt-sync')();

function editarContato(contatos){
    listarContatos(contatos);
    var posicao = prompt('Digite qual contato deseja alterar');
    parseInt(posicao--)
    if (posicao < 0 || posicao >= contatos.length) {
        console.log('Sessão Não Encontrada, Tente Novamente')
        editarContato()
    } else {
        let id = prompt('Digite o id: ');
        let nome = prompt('Digite o nome: ');
        let telefone = prompt('Digite o telefone: ');
        let email = prompt('Digite o email: ');
        contatos[posicao] = { id, nome, telefone, email }
        console.log('contato atualizado com sucesso!')
    }
}

module.exports = { editarContato }
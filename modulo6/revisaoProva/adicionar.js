const prompt = require('prompt-sync')();

function adicionarContato(contatos){
    const id = prompt('digite o id: ')
    const nome = prompt('digite o nome: ')
    const telefone = prompt('digite o telefone: ')
    const email = prompt('digite o email: ')
    contatos.push({
        id: id,
        nome: nome,
        telefone: telefone,
        email: email
    })
}

module.exports = { adicionarContato }
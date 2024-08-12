let usuarios = require('./usuarios');

function removerUsuario(index, confirmacao) {
    confirmacao.toLowerCase
    if (confirmacao === 'sim') {
        usuarios.splice(index, 1);
        console.log('Usuario removido com sucesso!')
    } else if(confirmacao === 'não' || confirmacao === 'nao') {
        console.log('O usuario selecionado não será removido!');
        return null;
    } else {
        console.log('Valor invalido!');
        return null;
    }
}

module.exports = removerUsuario;
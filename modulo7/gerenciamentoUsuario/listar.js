let usuarios = require('./usuarios');

function listarUsuarios() {
    usuarios.forEach((usuario, index) => {
    console.log(`Id: ${usuario.id}, Nome: ${usuario.nome}, Telefone:
    ${usuario.telefone}, Email: ${usuario.email}`);
    });
}

module.exports = listarUsuarios;
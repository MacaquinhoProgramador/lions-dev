let usuarios = require('./usuarios');

function removerUsuario(index) {
    usuarios.splice(index, 1);
}

module.exports = removerUsuario;
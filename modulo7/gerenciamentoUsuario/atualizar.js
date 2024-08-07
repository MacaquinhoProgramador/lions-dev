let usuarios = require('./usuarios');

function atualizarUsuario(index, novoUsuario) {
    usuarios[index] = novoUsuario;
}

module.exports = atualizarUsuario;
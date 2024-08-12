let usuarios = require('./usuarios');

function atualizarUsuario(index, novoUsuario) {
    jaExiste = usuarios.find(cont => cont.email === novoUsuario.email);
    if (jaExiste) {
        throw new Error('Já existe um usuario cadastrado com esse email');
    }else {
        usuarios[index] = novoUsuario;
    }
}

module.exports = atualizarUsuario;
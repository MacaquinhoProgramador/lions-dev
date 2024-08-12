let usuarios = require('./usuarios');

function listarUsuarios() {
    usuarios.forEach((usuario) => {
    console.log(`
    Id: ${usuario.id},
    Nome: ${usuario.nome},
    Telefones:`),
    usuario.telefones.forEach((telefone) => {
        console.log(`       ${telefone}`)
    }),
    console.log(`   Email: ${usuario.email}`);
    });
}

module.exports = listarUsuarios;
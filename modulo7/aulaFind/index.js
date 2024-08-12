//asdasd
const prompt = require('prompt-sync')();
const listarUsuarios = require('./listar');
const adicionarUsuario = require('./adicionar');
const atualizarUsuario = require('./atualizar');
const removerUsuario = require('./remover');
const usuarios = require('./usuarios')

let telefones = [];
let telefone;

function mainMenu() {
    console.log(`
    1. Listar usuarios
    2. Adicionar usuario
    3. Atualizar usuario
    4. Remover usuario
    5. Sair
    `);
    const opcao = prompt('Escolha uma opção: ');
    let index;

    switch (opcao) {
        case '1':
        listarUsuarios();
        mainMenu();
        break;

    case '2':
        const nome = prompt('Nome: ');
        telefones = []
        while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))) {
            telefones.push(telefone);
        }
        const email = prompt('Email: ');
        //let id = usuarios[usuarios.length - 1].id + 1;
        adicionarUsuario(usuarios,{ nome: nome, telefones: telefones, email: email });
        console.log('Usuário adicionado com sucesso!');
        mainMenu();
        break;

    case '3':
        listarUsuarios();
        index = parseInt(prompt('Número do usuário a atualizar: ')) - 1;
        const novoNome = prompt('Novo nome: ');
        telefones = []
        while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))) {
            telefones.push(telefone);
        }
        const novoEmail = prompt('Novo email: ');
        atualizarUsuario(index, { id: usuarios[index].id, nome: novoNome, telefones: telefones, email: novoEmail });
        console.log('Usuario atualizado com sucesso!');
        mainMenu();
        break;

    case '4':
        listarUsuarios();
        index = parseInt(prompt('Número do usuário a remover: ')) - 1;
        confirmacao = prompt(`Deseja mesmo remover o usuario?`);
        removerUsuario(index, confirmacao);
        mainMenu();
        break;
    case '5':
        break;
        
    default:
        console.log('Opção inválida!');
        mainMenu();
    }

}

mainMenu()
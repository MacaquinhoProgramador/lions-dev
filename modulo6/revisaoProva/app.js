const prompt = require('prompt-sync')();

const { listarContatos } = require('./listar')
const { adicionarContato } = require('./adicionar')
const { editarContato } = require('./editar')
const { removerContato } = require('./remover')

let contatos = [
    { id: 1, nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
    { id: 2, nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
    { id: 3, nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
];

function exibirMenu() {
    console.log(`
1. listar
2. adicionar
3. editar
4. remover
5. fechar programa
Digite uma opção: 
    `)
    const opcao = prompt('digite: ')
    switch (opcao) {
        case '1':
            listarContatos(contatos);
            exibirMenu();
            break;
        case '2':
            adicionarContato(contatos);
            exibirMenu();
            break;
        case '3':
            editarContato(contatos);
            exibirMenu();
            break;
        case '4':
            removerContato(contatos);
            exibirMenu();
            break;
        case '5':
            return;
            break;
        default:
            break;
    }    
}

exibirMenu()
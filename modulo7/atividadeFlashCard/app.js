const prompt = require('prompt-sync')();
const criarBaralho = require('./criarBaralho');
const criarFlashcard = require('./criarFlashcard')
const listarBaralhos = require('./listarBaralhos');
const atualizarBaralho = require('./atualizarBaralhos');
const deletarBaralho = require('./deletarBaralhos');
const { baralhos } = require('./data');
const { flashcards } = require('./data')

function menu() {
    console.log(`
    1. Criar caralhos
    2. Criar Flashcard
    2. Listar caralho
    3. Atualizar caralho
    4. deletar caralho
    5. Sair desse caralho
    `);
    const opcao = prompt('Escolha uma opção: ');
    let index;
    let id;
    let idBaralho;

    switch (opcao) {
        case '1':
            id = baralhos[baralhos.length - 1].id + 1;
            const titulo = prompt('Titulo: ');
            criarBaralho(baralhos,{ id: id, titulo: titulo });
            console.log('Baralho adicionado com sucesso!');
            menu();
            break;

        case '2':
            listarBaralhos();
            id = flashcards[flashcards.length - 1].id + 1;
            idBaralho = parseInt(prompt('Número do baralho que deseja adicionar flashcards: '));
            const pergunta = prompt('Pergunta: ');
            const resposta = prompt('Resposta: ');
            criarFlashcard(flashcards,{ id: id, perguntas: perguntas, resposta: resposta, idBaralho: idBaralho });
            break;
        case '3':
            listarBaralhos();
            menu();
            break;

        case '4':
            listarBaralhos();
            id = parseInt(prompt('Número do baralho a atualizar: '));
            const novoTitulo = prompt('Novo titulo: ');
            atualizarBaralho(id,{ id: baralhos[id-1].id, titulo: novoTitulo });
            console.log('Baralho atualizado com sucesso!');
            menu();
            break;

        case '5':
            listarBaralhos();
            id = parseInt(prompt('Número do baralho a remover: '));
            deletarBaralho(id);
            console.log('Baralho removido com sucesso!');
            menu();
            break;
        case '6':
            break;
            
        default:
            console.log('Opção inválida!');
            menu();
    }

}

menu()
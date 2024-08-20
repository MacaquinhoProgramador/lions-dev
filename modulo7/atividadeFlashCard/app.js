const prompt = require('prompt-sync')();
const criarBaralho = require('./baralho/criarBaralho');
const criarFlashcard = require('./flashcard/criarFlashcard')
const listarBaralhos = require('./baralho/listarBaralhos');
const listarFlashcards = require('./flashcard/listarFlashcards');
const listarFlashcardsPorBaralho = require('./flashcard/listarFlashcardsPorBaralhoId');
const atualizarFlashcard = require('./flashcard/atualizarFlashcard');
const atualizarBaralho = require('./baralho/atualizarBaralhos');
const deletarBaralho = require('./baralho/deletarBaralho');
const { baralhos } = require('./data');
const { flashcards } = require('./data');
const deletarFlashcard = require('./flashcard/deletarFlashcard');
const buscarFlashcardsporPergunta = require('./flashcard/buscarFlashcardsporPergunta');
const buscarFlashcardsPorBaralho = require('./flashcard/buscarFlashcardsPorBaralho');


function menu() {
    console.log(`
    1. Criar Baralho
    2. Criar Flashcard
    3. Listar Baralhos
    4. Listar Flashcards
    5. Listar Flashcards por Baralho
    6. Atualizar Baralho
    7. Atualizar Flashcard
    8. Deletar Baralho
    9. Deletar Flashcard
    10. Buscar Flashcards por Pergunta
    11. Buscar Flashcards por Baralho
    0. Sair
    `);
    const opcao = prompt('Escolha uma opção: ');
    let index;
    let id;
    let idBaralho;
    let pergunta;
    let resposta;

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
            idBaralho = parseInt(prompt('Número do baralho que deseja adicionar flashcards: '));
            id = flashcards[flashcards.length - 1].id + 1;
            pergunta = prompt('Pergunta: ');
            resposta = prompt('Resposta: ');
            criarFlashcard(flashcards, { id: id, pergunta: pergunta, resposta: resposta, idBaralho: idBaralho });
            menu();
            break;
        case '3':
            listarBaralhos();
            menu();
            break;

        case '4':
            listarFlashcards();
            menu();
            break;

        case '5':
            listarFlashcardsPorBaralho();
            menu();
            break;

        case '6':
            listarBaralhos();
            id = parseInt(prompt('Número do baralho a atualizar: '));
            const novoTitulo = prompt('Novo titulo: ');
            atualizarBaralho(id,{ id: baralhos[id-1].id, titulo: novoTitulo });
            console.log('Baralho atualizado com sucesso!');
            menu();
            break;

        case '7':
            listarFlashcardsPorBaralho();
            idBaralho = parseInt(prompt('Número do baralho do flashcard que deseja atualizar: '));
            id = parseInt(prompt('Número do flashcard que deseja atualizar: '));
            novaPergunta = prompt('Pergunta: ');
            novaResposta = prompt('Resposta: ');
            atualizarFlashcard(id, { id: flashcards[id-1].id, pergunta: novaPergunta, resposta: novaResposta, idBaralho: flashcards[idBaralho-1].idBaralho }, idBaralho);
            console.log('Flashcard atualizado com sucesso.')
            menu();
            break;

        case '8':
            listarBaralhos();
            id = parseInt(prompt('Número do baralho a deletato: '));
            deletarBaralho(id);
            console.log('Baralho deletado com sucesso!');
            menu();
            break;

        case '9':
            listarFlashcards();
            id = parseInt(prompt('Número do flashcard a ser removido: '));
            deletarFlashcard();
            console.log('Flashcard deletato com sucesso!')
            menu();
            break;

        case '10':
            index = prompt('Digite uma palavra que deseja pesquisar: ');
            buscarFlashcardsporPergunta(index);
            menu();
            break;

        case '11':
            index = prompt('Digite o baralho que está procurando: ');
            buscarFlashcardsPorBaralho(index);
            menu();
            break;
            
        case '0':
            break;
            
        default:
            console.log('Opção inválida!');
            menu();
    }

}

menu()
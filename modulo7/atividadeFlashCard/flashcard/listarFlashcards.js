let { flashcards } = require('../data');

function listarFlashcards() {
    flashcards.forEach(flashcard => {
    console.log(`Id: ${flashcard.id}, Pergunta: ${flashcard.pergunta}, Resposta: ${flashcard.resposta}, id do baralho: ${flashcard.idBaralho}`);
    });
}

module.exports = listarFlashcards;
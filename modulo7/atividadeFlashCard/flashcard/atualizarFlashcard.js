const { flashcards } = require("../data");

function atualizarFlashcard(id, novoFlashcard, idBaralho){
    let index = flashcards.findIndex(flashcard => flashcard.id === id || flashcard.idBaralho === idBaralho );
    flashcards[index] = novoFlashcard;

}

module.exports = atualizarFlashcard;
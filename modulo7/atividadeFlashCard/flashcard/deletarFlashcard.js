let { flashcards } = require('../data');

function deletarFlashcard(id) {
    let index = flashcards.findIndex(flashcard => flashcard.id === id);
    flashcards.splice(index, 1);
}

module.exports = deletarFlashcard;
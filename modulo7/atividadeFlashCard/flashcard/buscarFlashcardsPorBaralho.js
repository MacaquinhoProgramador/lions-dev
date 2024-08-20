const { flashcards } = require('../data');

function buscarFlashcardsPorBaralho(index) {
    const resultado = flashcards.filter(flashcard => flashcard.idBaralho === index);

    if (resultado.length > 0) {
        resultado.forEach(flashcard => {
            console.log(`
            Id: ${flashcard.id},
            Pergunta: ${flashcard.pergunta},
            Resposta: ${flashcard.resposta}
            `);
        });
    } else {
        console.log('Nenhum flashcard encontrado para este baralho.');
    }
}

module.exports = buscarFlashcardsPorBaralho;
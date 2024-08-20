const { flashcards } = require("../data");

function buscarFlashcardsorPergunta(pergunta){
    const resultados = flashcards.filter(flashcard => flashcard.pergunta.toLowerCase().includes(pergunta));

    if (resultados.length > 0) {
        resultados.forEach(flashcard => {
            console.log(`
            Id: ${flashcard.id},
            Pergunta: ${flashcard.pergunta},
            Resposta: ${flashcard.resposta}
            `);
        });
    } else {
        console.log('Nenhum flashcard encontrado com essa pergunta.');
    }
}

module.exports = buscarFlashcardsorPergunta;
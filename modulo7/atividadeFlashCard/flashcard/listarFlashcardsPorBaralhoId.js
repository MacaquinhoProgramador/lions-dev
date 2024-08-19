const { baralhos, flashcards } = require("../data");
const criarFlashcard = require("./criarFlashcard");

function listarFlashcardsPorBaralho(){
    baralhos.forEach((baralho, index) => {
        console.log(`\nId: ${baralho.id}, Titulo: ${baralho.titulo}`);
        flashcards.forEach(flashcard => {
            if (index + 1 === flashcard.idBaralho) {
                console.log(`   Id: ${flashcard.id}, Pergunta: ${flashcard.pergunta}, Resposta: ${flashcard.resposta}, id do baralho: ${flashcard.idBaralho}`);
            }
        });
    });
}

module.exports = listarFlashcardsPorBaralho
const { flashcards } = require("../data");

const atualizarFlashcard = (req, res) => {
    const { id } = req.params;
    const novaPergunta = req.body.pergunta;
    const novaResposta = req.body.resposta;

    const flashcard = flashcard.find((b) => b.id == id);

    if (!flashcard) {
        return res.status(404).send({ message: 'flashcard não encontrado' });
    }

    flashcard.titulo = novaPergunta;
    res.status(200).send({
        message: 'flashcard atualizado com sucesso!',
        flashcard: flashcard
    });

}

module.exports = atualizarFlashcard;
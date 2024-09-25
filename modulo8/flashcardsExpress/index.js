// Inicializando o Servidor

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const criarBaralho = require('./baralho/criarBaralho');
app.post('/baralho', criarBaralho);

app.get('/', (req, res) => {
    res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const listarBaralhos = require('./baralho/listarBaralhos');
app.get('/baralho', listarBaralhos);

const atualizarBaralho = require('./baralho/atualizarBaralho');
app.put('/baralho/:id', atualizarBaralho);

const deletarBaralho = require('./baralho/deletarBaralho');
app.delete('/baralho/:id', deletarBaralho);

const listarFlashcards = require('./flashcard/listarFlashcards');
app.get('/flashcard', listarFlashcards);

const criarFlashcard = require('./flashcard/criarFlashcard');
app.post('/flashcard', criarFlashcard);

const atualizarFlashcard = require('./flashcard/atualizarFlashcard');
app.put('/flashcard/:id', atualizarFlashcard);

// guilherme, aqui está uma mensagem do seu admirador secreto...
// você é um gatinho, sabia? <3<3<3
const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(req.headers)
    if (!req.headers['authorization']) {
        res.status(400).send('Palavra secreta faltando!');
        throw new Error('Usuário não enviou a palavra secreta');
    } else if(req.headers['authorization'] != 'senhasecreta') {
        res.status(403).send('Acesso negado: Token invalido!');
        throw new Error('Usuário enviou a palavra secreta errada!');
    }else{ 
        next();
    }
});

app.get('/', (req, res) => {
    res.send('Sua presença foi confirmada!');
    console.log('Palavra secreta:', req.headers['authorization']);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});
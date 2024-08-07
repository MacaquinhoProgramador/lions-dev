const prompt = require('prompt-sync')();
const { listarResidencias } = require('./listar');
const { adicionarResidencia } = require('./adicionar');
const { editarResidencia } = require('./editar');
const { removerResidencia } = require('./remover');

let residencias = [{
    proprietario: 'joão da Silva',
    endereco: 'contorno 134 rua das picuinhas',
    tipoCasa: 'Sobrado quadriplex',
    contaBancaria: '12345678/3541'
}];

function exibirMenu(){
    console.log(`
1. listar
2. adicionar
3. editar
4. remover
5. sair
    `);
    const entrada = prompt('Digite a ação: ');

    switch (entrada) {
        case '1':
            listarResidencias(residencias, exibirMenu);
            exibirMenu();
            break;
        case '2':
            adicionarResidencia(residencias);
            exibirMenu();
            break;
        case '3':
            editarResidencia(residencias);
            exibirMenu();
            break;
        case '4':
            removerResidencia(residencias);
            exibirMenu();
            break;
        case '5':
            return;
            break;
        default:
            console.log('Valor incorreto!');
            exibirMenu();
            break;
    }
}

exibirMenu();
const prompt = require('prompt-sync')();
const { listarResidencias } = require("./listar");

function editarResidencia(residencias){
    listarResidencias(residencias);
    var escolha = prompt('Digite qual opção você deseja editar: ');
    if(escolha > 0 && escolha <= residencias.length){
        const proprietario = prompt('Digite o nome do proprietario: ');
        const endereco = prompt('Digite o endereço da residencia: ');
        const tipoCasa = prompt('Digite o tipo de casa: ');
        const contaBancaria = prompt('Digite os números do seu cartão frente e verso. (é apenas para pesquisa de estatisticas): ');
        escolha--;
        residencias[escolha] = {
            proprietario: proprietario, 
            endereco: endereco,
            tipoCasa: tipoCasa,
            contaBancaria: contaBancaria
        }
        console.log('Residência cadastrada com sucesso!');
    }else {
        console.error('Valor incorreto!');
    }
}

module.exports = { editarResidencia }
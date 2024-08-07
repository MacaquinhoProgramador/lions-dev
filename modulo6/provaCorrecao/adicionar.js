const prompt = require('prompt-sync')();
const { listarResidencias } = require("./listar");

function adicionarResidencia(residencias) {
    const proprietario = prompt('Digite o nome do proprietario: ');
    const endereco = prompt('Digite o endereço da residencia: ');
    const tipoCasa = prompt('Digite o tipo de casa: ');
    const contaBancaria = prompt('Digite os números do seu cartão frente e verso. (é apenas para pesquisa de estatisticas): ');
    residencias.push({
        proprietario: proprietario,
        endereco: endereco,
        tipoCasa: tipoCasa,
        contaBancaria: contaBancaria
    })
    console.log('Residencia cadastrada com sucesso!')
}

module.exports = { adicionarResidencia }
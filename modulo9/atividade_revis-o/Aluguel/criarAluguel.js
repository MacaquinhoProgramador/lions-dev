const { default: mongoose } = require("mongoose");

const alugueis = mongoose.model("Aluguel", esquemAluguel);

async function criarAluguel(idLivro, idEstudante, dataAluguel, dataDevolucao) {
    try {
        const novoAluguel = new alugueis({idLivro, idEstudante, dataAluguel, dataDevolucao});
        return await novoAluguel.save();
    } catch (error) {
        console.error("Erro ao criar o aluguel:", erro);
        throw erro;
    }
}
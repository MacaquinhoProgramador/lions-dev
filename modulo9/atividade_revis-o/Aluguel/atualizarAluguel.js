async function atualizarAlugueis(idLivro, idEstudante, dataAluguel, dataDevolucao) {
    try {
        const aluguelAtualizado = await atualizarAlugueis.findByIdAndUpdate(
            id,
            { idLivro, idEstudante, dataAluguel, dataDevolucao },
            { new: true, runValidators: true }
        );
        return aluguelAtualizado;
    } catch (erro) {
        console.error("Erro ao atualizar aluguel", erro);
        throw erro;
    }
}
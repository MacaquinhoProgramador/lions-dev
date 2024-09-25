async function deletarAluguel(id) {
    try {
      const aluguelDeletado = await aluguel.findByIdAndDelete(id);
      return aluguelDeletado;
    } catch (erro) {
      console.error("Erro ao deletar aluguel:", erro);
      throw erro;
    }
  }
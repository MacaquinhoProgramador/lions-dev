async function editarFicha(id, raca, nome, classe, equipamento, forca, destreza, constituicao, inteligencia, sabedoria, carisma, fichas) {
    try {
        const fichaEditada = await fichas.findByIdAndUpdate(
            id,
            { raca, nome, classe, equipamento, forca, destreza, constituicao, inteligencia, sabedoria, carisma },
            { new: true, runValidators: true }
          );
          return fichaEditada;
    } catch (error) {
        console.error("Erro ao atualizar Ficha:", error);
    throw error;
    }
}

module.exports =  editarFicha 


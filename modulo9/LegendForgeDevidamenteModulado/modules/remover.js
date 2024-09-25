async function deletarFicha(id,fichas) {
    try{
        const livroDeletado = await fichas.findByIdAndDelete(id);
        return livroDeletado;
    } catch(erro){
        console.error("Erro ao deletar a Ficha",erro)
        throw erro; 
    }
}    

module.exports = deletarFicha
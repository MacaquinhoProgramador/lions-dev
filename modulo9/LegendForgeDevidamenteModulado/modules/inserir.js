async function criarFicha(raca, nome, classe, equipamento, forca, destreza, constituicao, inteligencia, sabedoria, carisma, fichas) {
    try{
        const novaFicha = new fichas({
            raca,
            nome,
            classe,
            equipamento,
            forca,
            destreza,
            constituicao,
            inteligencia,
            sabedoria,
            carisma
        })
        return await novaFicha.save();
    } catch(erro){
        console.error("Erro ao obter a ficha",erro)
        throw erro;
    }
}

module.exports = criarFicha
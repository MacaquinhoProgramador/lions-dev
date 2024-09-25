async function listarFichas(fichas) {
    try {
        return await fichas.find()
    } catch (error) {
        console.error("Erro ao obter as Fichas!", error);
        throw error
    }
}

module.exports = listarFichas 

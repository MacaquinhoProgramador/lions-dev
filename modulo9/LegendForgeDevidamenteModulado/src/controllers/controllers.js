const fichas = require('../models/models')

async function criarFicha (req, res){
    const { raca, nome, classe, equipamento, forca, destreza, constituicao, inteligencia, sabedoria, carisma } = req.body;
    try {
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
        const fichaSalva = await novaFicha.save();
      res
        .status(201)
        .json({ mensagem: "Aventureiro ingressado na guilda.", ficha: fichaSalva });
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao ingressar o aventureiro na guilda", erro: erro.message });
    }
}

async function listarFichas(req, res) {
    try {
        const listarfichas = await fichas.find()
        res
          .status(201)
          .send(listarfichas);
    } catch (error) {
        console.error("Erro ao obter as Fichas!", error);
        throw error
    }
}

async function editarFicha(req,res){
  try {
    const { id } = req.params;
    const { raca, nome, classe, equipamento, forca, destreza, constituicao, inteligencia, sabedoria, carisma } = req.body;
    const fichaEditada = await fichas.findByIdAndUpdate(
        id,
        { raca, nome, classe, equipamento, forca, destreza, constituicao, inteligencia, sabedoria, carisma },
        { new: true, runValidators: true }
      );
    if (fichaEditada) {
      res
        .status(200)
        .json({
          mensagem: "Ficha atualizada com sucesso",
          ficah: fichaEditada,
        });
    } else {
      res.status(404).json({ mensagem: "Ficha não encontrada" });
    }
  } catch (erro) {
    res
      .status(500)
      .json({ mensagem: "Erro ao atualizar ficha", erro: erro.message });
  }
};

async function deletarFicha (req, res){
    try {
      const { id } = req.params;
      const fichaDeletada = await fichas.findByIdAndDelete(id);
      if (fichaDeletada) {
        res
          .status(200)
          .json({ mensagem: "Funeral de aventureiro feito com sucesso", ficha: fichaDeletada });
      } else {
        res.status(404).json({ mensagem: "Ficha não encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Não foi possivel realizar o funeral do aventureiro.", erro: erro.message });
    }
};

module.exports = {criarFicha,listarFichas,editarFicha,deletarFicha}
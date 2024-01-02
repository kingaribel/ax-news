const express = require("express");
const InformacaoGeral = require("../models/InformacaoGeral");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const informacaoGeral = await InformacaoGeral.create(req.body);
    res.json(informacaoGeral);
  } catch (error) {
    res.status(500).json({ message: "Falha ao adicionar esta informação." });
  }
});

router.get("/", async (req, res) => {
  try {
    const informacoes = await InformacaoGeral.findAll();
    res.json(informacoes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao listar informações registadas." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const informacaoGeral = await InformacaoGeral.findByPk(req.params.id);
    if (!informacaoGeral) {
      res.status(404).json({ message: "Item não encontrado!" });
    } else {
      res.json(informacaoGeral);
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao buscar este item." });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await InformacaoGeral.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Item não encontrado!" });
    } else {
      const informacaoGeral = await InformacaoGeral.findByPk(req.params.id);
      res.json(informacaoGeral);
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao editar esta informação." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedRowsCount = await InformacaoGeral.destroy({
      where: { id: req.params.id },
    });
    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Item não encontrado!" });
    } else {
      res.json({ message: "Item apagado com sucesso!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao remover este item." });
  }
});

module.exports = router;

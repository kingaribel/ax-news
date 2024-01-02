const express = require("express");
const ServicoEquipamento = require("../models/ServicoEquipamento");
const router = express.Router();

// Create a news
router.post("/", async (req, res) => {
  try {
    const servicoEquipamento = await ServicoEquipamento.create(req.body);
    res.json(servicoEquipamento);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao criar esta serviço ou equipamento." });
  }
});

// Get all news
router.get("/", async (req, res) => {
  try {
    const noticias = await ServicoEquipamento.findAll();
    res.json(noticias);
  } catch (error) {
    res.status(500).json({ message: "Falha ao listar serviços/equipamentos." });
  }
});

// Get a news by ID
router.get("/:id", async (req, res) => {
  try {
    const servicoEquipamento = await ServicoEquipamento.findByPk(req.params.id);
    if (!servicoEquipamento) {
      res.status(404).json({ message: "Item não encontrado!" });
    } else {
      res.json(servicoEquipamento);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao buscar serviço ou equipamento." });
  }
});

// Update a news by ID
router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await ServicoEquipamento.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Item não encontrado!" });
    } else {
      const servicoEquipamento = await ServicoEquipamento.findByPk(
        req.params.id
      );
      res.json(servicoEquipamento);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao editar esta serviço ou equipamento." });
  }
});

// Delete a news by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRowsCount = await ServicoEquipamento.destroy({
      where: { id: req.params.id },
    });
    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Item não encontrado!" });
    } else {
      res.json({ message: "Item apagada com sucesso!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao remover esta serviço ou equipamento." });
  }
});

module.exports = router;

const express = require("express");
const Categoria = require("../models/Categoria");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: "Falha ao adicionar esta informação." });
  }
});

router.get("/", async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao listar informações registadas." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const categoria = await Categoria.findByPk(req.params.id);
    if (!categoria) {
      res.status(404).json({ message: "Item não encontrado!" });
    } else {
      res.json(categoria);
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao buscar este item." });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await Categoria.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Item não encontrado!" });
    } else {
      const categoria = await Categoria.findByPk(req.params.id);
      res.json(categoria);
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao editar esta informação." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedRowsCount = await Categoria.destroy({
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

const express = require("express");
const FaleConnosco = require("../models/FaleConnosco");
const router = express.Router();

// Create a faleConnosco
router.post("/", async (req, res) => {
  try {
    const mensagem = await FaleConnosco.create(req.body);
    res.json(mensagem);
  } catch (error) {
    res.status(500).json({ message: "Falha ao criar esta contacto." });
  }
});

// Get all faleConnosco
router.get("/", async (req, res) => {
  try {
    const noticias = await FaleConnosco.findAll();
    res.json(noticias);
  } catch (error) {
    res.status(500).json({ message: "Falha ao listar contactos." });
  }
});

// Get a faleConnosco by ID
router.get("/:id", async (req, res) => {
  try {
    const mensagem = await FaleConnosco.findByPk(req.params.id);
    if (!mensagem) {
      res.status(404).json({ message: "Mensagem não encontrada!" });
    } else {
      res.json(mensagem);
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao buscar contacto." });
  }
});

// Update a faleConnosco by ID
router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await FaleConnosco.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Mensagem não encontrada!" });
    } else {
      const mensagem = await FaleConnosco.findByPk(req.params.id);
      res.json(mensagem);
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao editar esta contacto." });
  }
});

// Delete a faleConnosco by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRowsCount = await FaleConnosco.destroy({
      where: { id: req.params.id },
    });
    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Mensagem não encontrada!" });
    } else {
      res.json({ message: "Mensagem apagada com sucesso!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao remover esta contacto." });
  }
});

module.exports = router;

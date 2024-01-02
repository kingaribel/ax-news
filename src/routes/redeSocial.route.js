const express = require("express");
const RedeSocial = require("../models/RedeSocial");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const redeSocial = await RedeSocial.create(req.body);
    res.json(redeSocial);
  } catch (error) {
    res.status(500).json({ message: "Falha ao adicionar esta informação." });
  }
});

router.get("/", async (req, res) => {
  try {
    const redesSociais = await RedeSocial.findAll();
    res.json(redesSociais);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Falha ao listar informações registadas." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const redeSocial = await RedeSocial.findByPk(req.params.id);
    if (!redeSocial) {
      res.status(404).json({ message: "Item não encontrado!" });
    } else {
      res.json(redeSocial);
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao buscar este item." });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await RedeSocial.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Item não encontrado!" });
    } else {
      const redeSocial = await RedeSocial.findByPk(req.params.id);
      res.json(redeSocial);
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao editar esta informação." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedRowsCount = await RedeSocial.destroy({
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

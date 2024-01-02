const express = require("express");
const Noticia = require("../models/Noticia");
const NoticiaCategoria = require("../models/NoticiaCategoria");
const Categoria = require("../models/Categoria");
const router = express.Router();

// Create a news
router.post("/", async (req, res) => {
  try {
    const { categorias, ...payload } = req.body;
    let noticia = await Noticia.create(payload);
    if (categorias && categorias.length) {
      await NoticiaCategoria.bulkCreate(
        categorias.map((categoria) => ({
          categoria_id: categoria,
          noticia_id: noticia.id,
        }))
      );
    }
    noticia = await Noticia.findByPk(noticia.id, {
      include: Categoria,
    });
    res.json(noticia);
  } catch (error) {
    res.status(500).json({ message: "Falha ao criar esta notícia." });
  }
});

// Get all news
router.get("/", async (req, res) => {
  try {
    const noticias = await Noticia.findAll({ include: Categoria });
    res.json(noticias);
  } catch (error) {
    res.status(500).json({ message: "Falha ao listar notícias." });
  }
});

// Get a news by ID
router.get("/:id", async (req, res) => {
  try {
    const noticia = await Noticia.findByPk(req.params.id, {
      include: Categoria,
    });
    if (!noticia) {
      res.status(404).json({ message: "Notícia não encontrada!" });
    } else {
      res.json(noticia);
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao buscar notícia." });
  }
});

// Update a news by ID
router.put("/:id", async (req, res) => {
  try {
    const { categorias, ...payload } = req.body;
    noticia = await Noticia.findByPk(req.params.id);
    if (!noticia) {
      res.status(404).json({ message: "Notícia não encontrada!" });
    } else {
      const [updatedRowsCount] = await Noticia.update(payload, {
        where: { id: req.params.id },
      });
      if (categorias && typeof categorias.length == "number") {
        await NoticiaCategoria.destroy({ where: { noticia_id: noticia.id } });
        await NoticiaCategoria.bulkCreate(
          categorias.map((categoria) => ({
            categoria_id: categoria,
            noticia_id: noticia.id,
          }))
        );
      }
      noticia = await Noticia.findByPk(noticia.id, {
        include: Categoria,
      });
      res.json(noticia);
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao editar esta notícia." });
  }
});

// Delete a news by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRowsCount = await Noticia.destroy({
      where: { id: req.params.id },
    });
    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Notícia não encontrada!" });
    } else {
      res.json({ message: "Notícia apagada com sucesso!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Falha ao remover esta notícia." });
  }
});

module.exports = router;

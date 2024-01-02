const Sequelize = require("sequelize");
const sequelize = require("../db");
const Noticia = require("./Noticia");
const Categoria = require("./Categoria");

const NoticiaCategoria = sequelize.define("noticiaCategoria", {
  categoria_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Categoria,
      key: "id",
    },
  },
  noticia_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Noticia,
      key: "id",
    },
  },
});
module.exports = NoticiaCategoria;

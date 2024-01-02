const Sequelize = require("sequelize");
const sequelize = require("../db");
const NoticiaCategoria = require("./NoticiaCategoria");
const Noticia = require("./Noticia");

const Categoria = sequelize.define("categoria", {
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Categoria;

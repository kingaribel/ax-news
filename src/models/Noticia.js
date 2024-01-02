const Sequelize = require("sequelize");
const sequelize = require("../db");
const Categoria = require("./Categoria");
const NoticiaCategoria = require("./NoticiaCategoria");

const Noticia = sequelize.define("noticia", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  corpo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  fotoCapa: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  autor: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
Noticia.belongsToMany(Categoria, {
  through: NoticiaCategoria,
  foreignKey: "noticia_id",
});
Categoria.belongsToMany(Noticia, {
  through: NoticiaCategoria,
  foreignKey: "categoria_id",
});
module.exports = Noticia;

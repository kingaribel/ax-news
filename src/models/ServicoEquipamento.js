const Sequelize = require("sequelize");
const sequelize = require("../db");

const ServicoEquipamento = sequelize.define("servicoEquipamento", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imagem: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  tipoRegisto: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = ServicoEquipamento;

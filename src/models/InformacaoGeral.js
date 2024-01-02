const Sequelize = require("sequelize");
const sequelize = require("../db");

const InformacaoGeral = sequelize.define("informacaoGeral", {
  descricaoEmpresa: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  moradaEmpresa: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  telefoneEmpresa: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  emailEmpresa: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = InformacaoGeral;

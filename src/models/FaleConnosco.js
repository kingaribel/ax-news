const Sequelize = require("sequelize");
const sequelize = require("../db");

const FaleConnosco = sequelize.define("faleConnosco", {
  primeiroNome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ultimoNome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  assunto: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  mensagem: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = FaleConnosco;

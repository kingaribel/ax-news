const Sequelize = require("sequelize");
const sequelize = require("../db");

const RedeSocial = sequelize.define("redeSocial", {
  linkedin: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  facebook: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  instagram: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  tiktok: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  snapchat: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = RedeSocial;

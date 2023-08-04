const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
const Country = require("./Country");

const Continent = sequelize.define("conitent", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  //countryId
});

module.exports = Continent;

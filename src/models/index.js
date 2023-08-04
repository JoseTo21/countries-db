const City = require("./City");
const Continent = require("./Contitent");
const Country = require("./Country");

Continent.belongsTo(Country);
Country.hasMany(Continent);

City.belongsTo(Country);
Country.hasMany(City);

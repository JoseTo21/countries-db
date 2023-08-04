const express = require("express");
const routerCountry = require("./country.router");
const routerCity = require("./city.router");
const routerContinent = require("./continent.router");
const router = express.Router();

router.use("/countries", routerCountry);
router.use("/cities", routerCity);
router.use("continents", routerContinent);

module.exports = router;

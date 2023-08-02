const express = require("express");
const routerCountry = require("./country.router");
const routerCity = require("./city.router");
const router = express.Router();

router.use("/countries", routerCountry);
router.use("/cities", routerCity);

module.exports = router;

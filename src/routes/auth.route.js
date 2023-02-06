const routes = require("express").Router();
const authController = require("../controllers/auth.controller");

routes.post("/",authController.login);

module.exports = routes;
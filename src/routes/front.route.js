const routes = require("express").Router();
const frontController = require("../controllers/front.controller");

//routes.get("/Home",frontController.getHome);
routes.get("/Home", (req, res) => {
    req.message = req.message || "";
    req.type = req.type || "";
    frontController.getHome(req, res);
});
routes.get("/Login",frontController.getLogin);
routes.get("/CadUser",(req, res) => {
    req.message = req.message || "";
    req.type = req.type || "";
    frontController.getCadUser(req, res);
});
routes.get("/CadItem",frontController.getCadItem);
routes.get("/Contato",frontController.geContato);
routes.get("/More",frontController.getMore);
routes.get("/Produtos",frontController.getProds);

module.exports = routes;
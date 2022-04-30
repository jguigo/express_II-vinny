const express = require("express");
const produtoController = require("../controllers/produtoController");
const usuariosController = require("../controllers/usuariosController");
const routes = express.Router();
const bloqueio = require("../middleware/bloqueio");
const createUserValitation = require('../validations/Users/create');

//o middleware vai entrar entre o endpoint e controller, por exemplo:
routes.get("/produtos", bloqueio, produtoController.listarProdutos);
routes.post("/produtos", produtoController.cadastrarProduto);
routes.put("/produtos/:id", produtoController.atualizarProduto);
routes.delete("/produtos/:id", produtoController.deletarProduto);

routes.post('/usuarios', createUserValitation, usuariosController.registro);

module.exports = routes;

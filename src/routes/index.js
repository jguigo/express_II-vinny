const express = require("express");
const AuthController = require("../controllers/authController");
const produtoController = require("../controllers/produtoController");
const usuariosController = require("../controllers/usuariosController");
const bloqueio = require("../middleware/bloqueio");
const createUserValitation = require("../validations/users/create");
const authLoginValidation = require("../validations/auth/login");
const auth = require("../middleware/auth");
const routes = express.Router();

//o middleware vai entrar entre o endpoint e controller, por exemplo:
routes.get("/produtos", bloqueio, produtoController.listarProdutos);
routes.post("/produtos", auth, produtoController.cadastrarProduto);
routes.put("/produtos/:id", produtoController.atualizarProduto);
routes.delete("/produtos/:id", produtoController.deletarProduto);

//validation, auth, token(jwt)
routes.post("/usuarios", createUserValitation, usuariosController.registro);
routes.post("/login", authLoginValidation, AuthController.login);

module.exports = routes;

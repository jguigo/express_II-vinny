const { Usuarios } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const bcrypt = require("bcrypt");

const AuthController = {
   async login(req, res) {
      const { email, senha } = req.body;

      const user = await Usuarios.findOne({
         //esse findOne vai ser utilizado para encontra o email porque vamos passa clausula where para poder pesquisar
         //se o email do usuário existe! Em outras palavras, se o usuário existe ou não!
         where: {
            email: email, //eu sei que é redudante!
         },
      });

      if (!user) {
         return res.status(400).json("Email não cadastrado!");
      }
      //compareSync entra na mesma ideia do hashSync no sentido de qual é melhor ou pior, outro ponto importante
      //é que esse compare vai ser a única forma de a gente descobrir se a senha é válida ou não.
      if (!bcrypt.compareSync(senha, user.senha)) {
         return res.status(401).json("Senha inválida!");
      }

      //o jwt.sign vai levar dois parâmetros:
      //1- payload os conteudos que eu quero que sejam salvos dentro desse token... geralmente são as informações
      //de usuário.
      //2-a nossa secret que ficou dentro de config
      const token = jwt.sign({
         id: user.id,
         email: user.email,
         nome: user.nome,
         // userType: 'admin' // eu posso passar informações a mais aqui e poder fazer validações de acesso para 
         //por exemplo, ti pode usuários e tal. Fica uma loucura.
      },
      secret.key
      );
      //com isso o jwt vai gerar um token que vamos devolver como resposta da nossa requisição de login!

      return res.json(token);
   },
};

module.exports = AuthController;

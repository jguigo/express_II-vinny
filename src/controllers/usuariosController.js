const { Usuarios } = require("../models");
const bcrypt = require("bcrypt");

const UsuariosController = {
   async registro(req, res) {
      const { nome, email, senha } = req.body;
      //normalmente quando a gente vai salvar um senha no db, essa senha precisa ser encryptografada pra ter um pouco mais de segurança
      //por se tratar de um dado sensível. Também garante um pouco de segurança do nosso sistema. Então para fazer isso, utilizamos um pacote chamado
      //de bcrypt

      //é importante que eu cria essa nova senha encryptada
      const newSenha = bcrypt.hashSync(senha, 10);
      //existem duas formas de fazer utilizando o hash(promise) e hashSync(sem promise) ->
      //A documentação diz que é melhor utilizar o com hash (promise), Isso ocorre porque o hash feito
      //pelo bcrypt é intensivo da CPU, portanto, a versão de sincronização bloqueará o event loop
      //e impedirá que seu aplicativo atenda a outras solicitações ou eventos de entrada. A versão
      //assíncrona usa um pool de threads que não bloqueia o event loop principal.

      //cadastra o usuário ao db.
      const newUser = await Usuarios.create({ nome, email, senha: newSenha });
      res.status(201).json(newUser);
   },
};

module.exports = UsuariosController;

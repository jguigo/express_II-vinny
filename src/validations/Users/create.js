const { validate, Joi } = require("express-validation");
//eu vou importar duas funções, a validade que vai ser responsável por montar a estruura para a
//validação e o Joi, que vai ser o real responsável pela validação.

module.exports = validate({
   //como o que vai ser validade vai vir pelo body, então descrevos o body e nele vai o Joi, que vai
   //ser responsável por fazer essa validação! Com o Joi é possível criar esse objeto diferente, um
   //objeto de validação! E cada campo que o body deveria receber, a gente monta lá dentro!
   body: Joi.object({
      //então aqui eu posso colocar os métodos do Joi para fazer validação, como o require() que indica
      //que ele é necessário, string() informa que é uma string e assim vai. https://joi.dev/api/
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().min(8).required(),
   }),
});

//depois de feito essa validação, temos que colocar ela na nossa rota como um middleware!



//como faço pra tentar por validações mais personalizadas?
//como faço pra tentar por validações mais personalizadas?
//como faço pra tentar por validações mais personalizadas?
//como faço pra tentar por validações mais personalizadas?
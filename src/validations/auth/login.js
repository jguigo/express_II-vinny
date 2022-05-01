const { validate, Joi } = require("express-validation");

module.exports = validate({
   body: Joi.object({
      email: Joi.string().email().required(),
      senha: Joi.string().required(),
      //para senha na hora de fazer a autenticação, utilizan o min não é legal, isso porque pode dar dicas
      //para que alguém possa tentar invadir o nosso sistema! 
   }),
});

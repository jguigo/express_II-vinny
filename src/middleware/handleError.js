//atentar aqui na parte do require, porque o sequelize também tem uma tipo de validação e não é essa
//que queremos!
const { ValidationError } = require("express-validation");
// const { UnauthorizedError } = require("express-jwt"); //importar o error! PS: NÃO FOI WTF?!

module.exports = (error, req, res, next) => {

   //a gente faz um if que vai nos dizer se o tipo de erro foi de validação, ou não... caso seja de
   //validação, a condição vai ser true e ele retorna o nosso erro
   if(error instanceof ValidationError){
      return res.status(error.statusCode).json(error);
   }


   //error que acontecem fora desse padrão e não é genérico, devemos colocar uma nova exceção! Também é importante
   //saber que é necessário importar o erro! EEEEEE ao inves do statusCode usamos apenas status.
   //PORQUE ESSE CASO NÃO FUNCIONOU UTILIZANDO O INSTACEOF??????????????????????????????????
   // if(error instanceof UnauthorizedError){
   //    return res.status(error.status).json(error);
   // }

   //esse aqui é como está descrito na doc, e não precisamos importar o erro! Vai ficar como gambiarra...
   if(error.name === "UnauthorizedError"){
      return res.status(error.status).json(error);
   }



   //todo erro que não for de validação normalmente é um erro generico, então podemos retornar no
   //um erro generico o status 500 + mensagem de erro

   return res.status(500).json(error);
};

//como esse middleware vai receber todo o tipo de erro e tratar apenas dele, então ele vai receber um novo parametro chamado de error, que vem antes da request

//todas as vezes que forem feitas essas validações, a gente vai ter que devolver algum erro para
//o usuário quando tiver feito essa request

//para isso é importante criar algum middleware que vai observar se deu algum erro ou não.
//Lembrando que esse daqui não faz a validação, ele vai apenas pegar quando o erro, para poder exibir
//como resposta


//LEMBRANDO QUE ESSE CARA AQUI NÃÃÃÃÃÃO É VALIDAÇÃO E SIM A CAPTURAÇÃO DE ERROS!!!
//LEMBRANDO QUE ESSE CARA AQUI NÃÃÃÃÃÃO É VALIDAÇÃO E SIM A CAPTURAÇÃO DE ERROS!!!
//LEMBRANDO QUE ESSE CARA AQUI NÃÃÃÃÃÃO É VALIDAÇÃO E SIM A CAPTURAÇÃO DE ERROS!!!
//LEMBRANDO QUE ESSE CARA AQUI NÃÃÃÃÃÃO É VALIDAÇÃO E SIM A CAPTURAÇÃO DE ERROS!!!
//LEMBRANDO QUE ESSE CARA AQUI NÃÃÃÃÃÃO É VALIDAÇÃO E SIM A CAPTURAÇÃO DE ERROS!!!
//LEMBRANDO QUE ESSE CARA AQUI NÃÃÃÃÃÃO É VALIDAÇÃO E SIM A CAPTURAÇÃO DE ERROS!!!
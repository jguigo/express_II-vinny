module.exports = (req, res, next) => {
   //utilizando o req.ip nos temos como pegar o ip de quem esta fazendo essa request
   //e o req.originalUrl que retorna a rota que foi acessada...
   console.log(`O ip: ${req.ip} acessou a rota: ${req.originalUrl}`);
   
   //o next é imporante de ser utilizado. Caso não seja utilizado, nosso backend fica travado!
   //isso porque depois de ser realizado a ação do middleware, ele não indica nada para que o processo
   //continue! Por isso o next é tão importante!
   next();
}

// Eu tenho que colocar essa função antes das requests e para isso nor temos duas formas!

//1- Eu posso colocar ele de forma goblal e reproduzir elas para todas as request!
//   Para que funciona de maneira global devemos colocar o nosso middleware arquivo que cria o servidor!

//2- Eu posso colocar em cada request que eu queira..
   //para este caso, eu devo importar o arquivo nas minhas rotas e utilizar ele como o middleware literalmente no meio da nossa rota (entre o endpoint e processamento do controller!)
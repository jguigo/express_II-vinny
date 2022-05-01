const { expressjwt: jwt } = require("express-jwt");
const secret = require("../configs/secret");
module.exports = jwt({
   secret: secret.key,
   algorithms: ["HS256"]
   
})

//como eu preciso se esse token esta correto ou válido, eu preciso passar essa função utilizando o express-JWT!
//Então como ele, no primeiro parâmetro nos passamos a nossa secret.key, isso porque eu preciso que ele fassa o processo inverso 
//O segundo parâmetro leva em consideração o algoritmo que vamos utilizar para cryptografia.

//depois de feito, a gente só precisa passar esse middleware na rota que precisa ser expecificada!
//depois de feito, a gente só precisa passar esse middleware na rota que precisa ser expecificada!
//depois de feito, a gente só precisa passar esse middleware na rota que precisa ser expecificada!
//depois de feito, a gente só precisa passar esse middleware na rota que precisa ser expecificada!
//depois de feito, a gente só precisa passar esse middleware na rota que precisa ser expecificada!
//depois de feito, a gente só precisa passar esse middleware na rota que precisa ser expecificada!
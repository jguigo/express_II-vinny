//os middleware podem ser utilizados para validação!
//para este caso eu vou fazer uso do escopo local.
module.exports = (req, res, next) => {
   const { pass } = req.query

   if(!pass || pass !== "banana"){
      return res.status(400).json('errado, query-string vazia ou diferente de banana');
   }

   next();
};

//para este caso, ele se vai me deixar chegar até o controller se for passado um query-string
//pass=banana -> para qualquer coisa diferente disse, ele vai me retornar bad request!
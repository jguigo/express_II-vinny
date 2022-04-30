const express = require('express');
const routes = require('./routes');
const requestLog = require('./middleware/requestLog'); //requisitando o middleware 
const db = require('./database');


const app = express();
db.hasConnection();

app.use(express.json());

app.use(requestLog); //middleware global e ele deve ser utilizado ANTES do use(routes)!

app.use(routes);

app.listen(4000, () => console.log("Servidor online, porta 4000"));

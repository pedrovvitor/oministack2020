const express = require('express');
const cors = require('cors'); 
const routes = require('./routes')
const app = express();

//Informa ao app para transformar os dados qeu forem recebidos em objetos json
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


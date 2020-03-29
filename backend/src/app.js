const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');
const app = express();

app.use(cors()); 
// fala pra aplicacao que estamos utilizando json para as requisicoes
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;


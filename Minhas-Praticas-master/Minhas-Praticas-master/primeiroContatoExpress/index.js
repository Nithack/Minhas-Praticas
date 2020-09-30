const express = require('express');
const rotas = require('./rotas/rotas')
const api = express();
api.use(rotas)
api.listen(3000)
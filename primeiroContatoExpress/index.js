const express = require('express');

const api = express();

api.use('/secret', (req, res, next)=>{
    console.log('alguem na area secreta')
    next()
})

api.get('/', (req, res)=>{
    res.send('hello world')
})

api.get('/secret', (req,res)=>{
    res.send('entrou na area secreta')
})

api.listen(3000)
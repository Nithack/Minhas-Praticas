const express = require('express')
const users = express.Router()

//users
users.use('/', (req, res, next)=>{
    console.log('alguem na area usuario')
    next()
})
users.get('/', (req, res)=>{
    res.send('bem vindo a area usuario')
});
users.post('/',(req, res)=>{
    res.send('Pacote enviado')
})

module.exports = users
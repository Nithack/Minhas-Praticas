const express = require('express')
const secret = express.Router()

//secret
secret.use('/', (req, res, next)=>{
    console.log('alguem na area secreta')
    next()
})
secret.get('/', (req, res,)=>{
    res.send('Voce está na area secreta')
 
})
secret.post('/', (req,res)=>{
    res.send('postagem efetuada')
})

module.exports = secret
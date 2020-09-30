import express from 'express';
import home from'./home/indexjs'

var router = express.Router()

router.use('/', home)


module.exports =  router
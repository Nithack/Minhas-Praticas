const express = require('express')
const users = require('./users/users')
const secret = require('./secret/secret')
const router = express.Router()

router.use('/users', users)
router.use('/secret', secret)

//home
router.get('/', (req, res)=>{
    res.send('hello world')
})

router.get('/example/b', function (req, res, next) {
    console.log('chamando função req, res depois dando next para chamar a proxima função');
    next();
  }, function (req, res) {
    res.send('segundo next');
  });
  


module.exports = router;
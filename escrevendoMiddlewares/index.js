const express = require("express")
const app = express()
const logger = (req, res,next)=>{
    console.log('Login')
    next()
}
const requestTime = (req, res, next)=>{
    req.requestTime = Date.now()
    next()
}
app.use(requestTime)
app.use(logger)
app.use('/teste', (req, res,next)=>{
    let responseText =  "Request at: " + req.requestTime;
    console.log(responseText)
    next()
})
app.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
  }, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });

  app.get('/users/:id', function (req, res, next) {
      //let msg = {nome: 'batata', email:'batata@gmail.com'}
      let msg = 'variables test'
      if (req.params.id == 'batata') next(msg);
    else next();
  });
  
app.get('/', (req, res) =>{
    res.send('home')
})

app.listen(3000)
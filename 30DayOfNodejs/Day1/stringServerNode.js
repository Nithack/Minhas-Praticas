import http from 'http'

var host = '127.0.0.1'
var port = 3000

var server = http.createServer((req,res)=>{
  res.writeHead(200,{"Content-Type": "text/plain"});
  res.write("Hello World!");
  res.end();
});

server.listen(port,host,(error)=>{
  if(error){
    return console.log('Error occured:', erro);
  }
  console.log('server is listening on '+ host + ':' + port);
})
import http from 'http'

var host = '192.168.0.1'

var port = '3000'
var server = http.createServer((request,response)=>{
  response.writeHead(200,{"Content-Type": "text/plain"});
  console.log("server Working");
  response.end('Server working Success');
});

server.listen(port,(error)=>{
  if(error){
    return console.log('Error occured:', erro);
  }
  console.log('server is listen on: '+host+':'+port)
})
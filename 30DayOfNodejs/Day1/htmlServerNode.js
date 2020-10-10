import http from 'http'
import fs from 'fs'

var port = 3000

http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type': 'text/html'});
  fs.readFile('index.html',(err,data)=>{
    if(err)
      throw err;
    console.log("Operation Succes")
    res.end(data);
  })
}).listen(port)
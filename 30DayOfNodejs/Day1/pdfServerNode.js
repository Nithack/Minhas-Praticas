import http from 'http'
import fs from 'fs'

var port = 3000
http.createServer((req,res)=>{
  fs.readFile('arquivo.pdf',(error,data)=>{
    if(error){
      res.json({'status': 'error', msg:err});

    }else{
      res.write(data);
      res.end
    }
  })
}).listen(port)
import http from 'http'
var server = '127.0.0.1'
var port = 3000

http.createServer((req,res)=>{
  let jsonRes = {
    status: 200,
    mesage: 'succssful',
    result : ['sunday','monday','tuesday', 'wednesday'],
    code : 2000
  }
  console.log('Server Running')
  res.end(JSON.stringify(jsonRes))
}).listen(port,server)
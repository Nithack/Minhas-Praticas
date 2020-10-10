import http from 'http'
import fs, { exists } from 'fs'

var server = '127.0.0.1'
var port = 3000

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'video/mp4' });
  fs.exists('video.mp4', (exists) => {
    if (exists) {
      var rstream = fs.createReadStream('video.mp4')
      rstream.pipe(res)
    } else {
      res.send('Its file not found')
      res.end()
    }
  })
}).listen(port, server)
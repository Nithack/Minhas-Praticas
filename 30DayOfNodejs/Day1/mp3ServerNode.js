import http from 'http'
import fs, { existsSync } from 'fs'

var server = '127.0.0.1'
var port = 3000

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'audio/mp3'});
    fs.exists('audio.mp3',(exists)=>{
		if(exists)
		{
      console.log('its ok!')
			var rstream = fs.createReadStream('audio.mp3');
			rstream.pipe(res);
		}
		else
		{
			res.end("Its a 404");
		}
	});
}).listen(port,server);
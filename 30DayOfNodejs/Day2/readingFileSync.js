import fs from 'fs'
var filename = 'message.txt'
var content = fs.readFileSync(filename)
console.log('content : ' + content)
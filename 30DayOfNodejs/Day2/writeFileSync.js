import fs from 'fs'

var content ="We are writting this file synchronously using node.js"

fs.writeFileSync('message.txt', content)
console.log('file written successfully')
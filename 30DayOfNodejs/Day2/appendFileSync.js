import fs from 'fs'
var content = 'We are appending ths file sunchronously using nodejs'
fs.appendFileSync('input.txt', content)
console.log('file appended Successfully')

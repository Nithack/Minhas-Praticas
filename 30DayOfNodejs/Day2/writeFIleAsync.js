import fs from 'fs'

var content = 'This is the content in the file'
fs.writeFile('message.txt', content, (err)=>{
  if(err)
    throw err
  console.log('it\'s saved!')
})
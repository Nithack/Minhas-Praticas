import fs from 'fs'
var newData = 'This data will be appended at the end of the file'
fs.appendFile('input.txt', newData,(err)=>{
  if(err)
    throw err
  console.log('the new contet wa appended successfully')
})
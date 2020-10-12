import fs, { rename } from 'fs'

var file = 'testeRenames.txt' 
var fileRename = 'message.txt'

fs.rename(fileRename,file,(err)=>{
  if(err)
  throw err
})
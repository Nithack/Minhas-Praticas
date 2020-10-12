import fs from 'fs'

fs.unlink('testeRenameSync.txt',(err)=>{
  if(err)
    throw err
})
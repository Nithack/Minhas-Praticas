import { Console } from 'console'
import fs from 'fs'

const output = fs.createWriteStream('./stdout.log')
const errOutput = fs.createWriteStream('./stdout.log')

const print = new Console(output, errOutput)

const roll = 789851

print.log(`roll: %d`, roll)
print.log('This will be stored in a file')


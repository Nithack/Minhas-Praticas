var input = require('fs').readFileSync('1008/dev/stdin', 'utf8');
var lines = input.split('\n');

var NUMBER = parseFloat(lines[0])
var HORAS = parseFloat(lines[1])
var PERHORAS = parseFloat(lines[2])
var SALARIO = parseFloat(HORAS * PERHORAS).toFixed(2)

console.log('NUMBER = '+ NUMBER)
console.log('SALARY = U$ '+ SALARIO)
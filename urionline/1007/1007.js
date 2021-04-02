var input = require('fs').readFileSync('1007/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0])
var B = parseFloat(lines[1])
var C = parseFloat(lines[2])
var D = parseFloat(lines[3])
var DIFERENCA = (A * B - C * D)

console.log('DIFERENCA = '+ DIFERENCA)
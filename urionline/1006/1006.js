var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0]) * 2
var B = parseFloat(lines[1]) * 3
var C = parseFloat(lines[2]) * 5
var SOMA = A + B + C
var MEDIA = SOMA / 10.0 

console.log('MEDIA = '+ MEDIA.toFixed(2))
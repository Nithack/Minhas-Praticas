var input = require('fs').readFileSync('1009/dev/stdin', 'utf8');
var lines = input.split('\n');

var SALARIO = parseFloat(lines[1])
var VENDAS = parseFloat(lines[2]) / 100 * 15
var PAGAMENTO = SALARIO + VENDAS

console.log('TOTAL = R$ '+ PAGAMENTO.toFixed(2))

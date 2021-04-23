const array = [
    ['lapis', 'caneta', 'borracha', ['chaves', 'anel'], 'caneta']
]
const item = 'borracha'

function procurarNaGaveta(item, array) {
    return array.indexOf(item)


}

const vazia = [5, 2, 10]
const result = []
const soma = 0
let i = 1
function somarArray() {
    result[0] = vazia[0]
    console.log(result)
    for (let index = 0; result[index] < vazia[2]; index++) {
        console.log(index)
        let somaArray = vazia[0] + vazia[1] 
        console.log(somaArray)
        result[index+1] = somaArray
        
    }
    // for (var i = 0; i < result.length; i++) {
    //     soma += result[i];
    // }
    console.log(result)
}


var input = [5, 2, 10]
var check = [5]
var resultado = []
function calculo() {
    for (i = 0; i < input.length; i++) {
        for (x = 0; x < check.length; x++) {
            if (input[i] != check[x]) {
                resultado.push(input[i])
            }
        }
    }
    console.log(resultado)
}
somarArray()
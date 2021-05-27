function maioresQue5Invertido(num) {
    //insira aqui o seu código
    const processNumber = `${num}`;
    let value = []
    processNumber.split('').map((element) => {
        if (element > 5) {
            value[value.length] = element;
        }
    })
    if (value.length == 0) return null;

    return parseInt(value.reverse().join(''));
}

console.log(maioresQue5Invertido(348597)); //retorna: 798
console.log(maioresQue5Invertido(5)); //retorna: null
console.log(maioresQue5Invertido(12)); //retorna: null

// Nesta atividade o desafio está em transformar os dados fornecidos na entrada. Caso possível utilize uma abordagem funcional na resolução.
// Sua missão é implementar a função maioresQue5Invertido que:

// Recebe como argumento um número
// Retorna um novo número composto pelos dígitos maiores que 5 que integram o argumento, em ordem inversa.
// Caso nenhum dígito do argumento seja maior que 5, null deve ser retornado
// Examplo
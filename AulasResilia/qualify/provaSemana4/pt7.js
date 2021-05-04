function separaEInverte(numero) {
    let numeros = numero.toString().split('').reverse().map(Number)
    return numeros
  }

console.log(separaEInverte(35231))
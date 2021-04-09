function  maiorEMenor(nomeros) {
    nomeros = `${Math.max.apply(null, nomeros.split(" ").map(Number))},${Math.min.apply(null, nomeros.split(" ").map(Number))}`
    return nomeros
  }

  console.log(maiorEMenor("1 2 3 4 5"))
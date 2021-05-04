var bolet1Dif = {
    'matematica': 6,
    'historia': 7,
    'fisica': 8,
    'geografia': 9,
    'quimica': 10
};

var bolet2Dif = {
    'matematica': 8,
    'historia': 7,
    'fisica': 8,
    'geografia': 9,
    'quimica': 10
};

var bolet3Dif = {
    'matematica': 8,
    'historia': 7,
    'fisica': 5,
    'geografia': 9,
    'quimica': 10
}


function recompensa(filho1, filho2, filho3) {
    let notaFilho1 = 0
    let notaFilho2 = 0
    let notaFilho3 = 0
    for (var key in filho1) {
        notaFilho1 += filho1[key]
        notaFilho2 += filho2[key]
        notaFilho3 += filho3[key]
    }
    if (notaFilho1 > notaFilho2 && notaFilho1 > notaFilho3) return 'Eu preciso comprar uma bicicleta para meu primeiro filho.';
    if (notaFilho2 > notaFilho3 && notaFilho2 > notaFilho1) return 'Eu preciso comprar uma bicicleta para meu segundo filho.';
    if (notaFilho3 > notaFilho1 && notaFilho3 > notaFilho2) return 'Eu preciso comprar uma bicicleta para meu terceiro filho.';
    return 'A bicicleta será dividida.'
}

var nomes = ["Max", "Mel", "Sol"];
var peso = [35.2, 18.6, 2.5];
var raca = ["Labrador", "Vira latas", "Chiuaua"];

function canilFactory(nomes, peso, raca) {
    return nomes = {
        nomes: nomes,
        pesos: peso,
        racas: raca,
        latir: function () {
            console.log(this.nomes + ': au au!!')
        },
        rosnar: function () {
            console.log(this.nomes + ': Grrrr!!')
        }
    }
}
let canil = []
nomes.forEach((element, index) => {
    let dog = canilFactory(element, peso[index], raca[index])
    canil.push(dog)
});
// for (let i = 0; i < nomes.length; i++) {
//     let dog = canilFactory(nomes[i], peso[i], raca[i])
//     canil.push(dog)
// }
canil[0].latir()
canil[1].latir()
canil[2].latir()



function canilFactory(nomes, peso, raca) {
    return {
        nomes: nomes,
        peso: peso,
        raca: raca,

        latir: function () {
            console.log(this.nomes + ': Auau')
        },
        rosnar: function () {
            console.log(this.nomes + ': Grrr')
        },
    }
}
var nomes = ["Max", "Mel", "Sol"];
var peso = [32.5, 18.6, 2.5];
var raca = ["Labrador", "Vira-Latas", "Chiuaua"];

canil1.rosnar
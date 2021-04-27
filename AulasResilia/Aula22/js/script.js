carro = {
    cor: "Amarelo",
    combustivel: 10,
    capacidade: 20,
    consumoKm: 12,
    previsao: function () {
        return this.combustivel * this.consumoKm
    },
    setCombustivel: function (value) {
        this.combustivel = value
    },
    getCombustivel: function () {
        return this.combustivel
    },
    setCor: function (value) {
        this.cor = value
    },
    getCor: function () {
        return this.cor
    },
    setCapacidade: function (value) {
        this.capacidade = value
    },
    getCapacidade: function () {
        return this.capacidade
    },
    setConsumoKm: function (value) {
        this.consumoKm = value
        console.log("Consumo alterado para " + value)
    },
    getConsumoKm: function () {

        return this.consumoKm
    }
}
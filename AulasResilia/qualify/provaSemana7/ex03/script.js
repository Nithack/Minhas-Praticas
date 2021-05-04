function fabricaDeBolas(tipo) {
    return {
        tipo: tipo,
        getTipo: function () {
            return this.tipo
        },
        setTipo: function (tipo) {
            this.tipo = tipo
        }
    }
}
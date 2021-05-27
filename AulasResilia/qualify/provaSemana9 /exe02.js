class Fantasma {
    constructor(element) {
        this.cor = element != undefined || element.length > 0 ? this.defineColor(element) : 'Cor inválida!'
    }
    defineColor(value) {
        switch (value) {
            case 'v':
                return 'vermelho'
            case 'a':
                return 'amarelo'
            case 'r':
                return 'roxo'
            default:
                throw new Error('Expected an error to be thrown')
        }

    }
}

let newColor = new Fantasma('')
console.log(newColor.cor)
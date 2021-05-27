class Televisao {
    constructor(tamanho, marca, preco) {
        this.tamanho = this._validacaoTamanho(tamanho);
        this.marca = this._validacaoMarca(marca);
        this.preco = this._validacaoPreco(preco);
    }
    getTamanho() {
        return this.tamanho
    }
    getPreco() {
        return this.preco
    }
    getMarca() {
        return this.marca
    }
    _validacaoTamanho(tam) {
        if (typeof tam != 'number') {
            throw new Error("Tamanho inválido");
        }
        return tam;
    }

    _validacaoMarca(ma) {
        if (typeof ma != 'string') {
            throw "Marca inválida"
        }
        switch (ma) {
            case 'Phillips': case 'LG': case 'TLC': case 'Sony':
                return ma;
            default: throw new Error("Marca inválida");
        }
    }

    _validacaoPreco(pre) {
        if (typeof pre != 'number') throw new Error('Preço inválido');
        return pre;
    }
}

class TelevisaoView {
    renderizar(tv) {
        const defaultTv = `<div>\n  <p><span class=\'size\'>${tv.tamanho}</span></p>\n  <p>${tv.marca}</p>\n  <p>${tv.preco}</p>\n<div>`

        return defaultTv
    }
}

const teste = new Televisao(120, 'LG', 10.99);


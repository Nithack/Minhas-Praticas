class Armazem {
    constructor() {
        this.arr = []
    }

    add(el) {
        this.arr.push(el);
    }
}
class Pilha extends Armazem {
    constructor() {
        super();
        this.arr.push(arguments)
    }
    desempilha() {

    }
    empilha() {

    }
}
class Fila extends Armazem {
    constructor() {
        super(...arguments)

    }
    partida() {

    }
    chegada() {

    }
}
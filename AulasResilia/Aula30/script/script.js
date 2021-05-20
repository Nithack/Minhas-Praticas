class Pilha {
    constructor() {
        this.array = [];
    }
    empilha(value) {
        this.array.push(value);
        console.log(`item ${value}, adicionado a pilha`);
    }
    desempilha() {
        try {
            if (this.array.length == 0) throw new Error('A pilha está vazia');
            this.array.pop();
            console.log('item removido');
        } catch (error) {
            console.log('Erro ao remover item da pilha');
            console.log(error.message);
        }
    }
    mostrarPilha() {
        try {
            let arrayReturn = this.array.map((element, index) => {
                return `Item: ${element}, Posição: ${index}`;
            })
            if (arrayReturn.length == 0) throw new Error('A pilha está vazia');
            console.log(arrayReturn);
        } catch (error) {
            console.log('Erro ao mostrar a pilha');
            console.log(error.message);
        }
    }
}

const novaPilha = new Pilha();

novaPilha.empilha('batata');
novaPilha.empilha('melancia');
novaPilha.empilha('repolho');
novaPilha.empilha('tomate');
novaPilha.mostrarPilha();
novaPilha.desempilha();
novaPilha.desempilha();
novaPilha.desempilha();
novaPilha.desempilha();
novaPilha.desempilha();
novaPilha.mostrarPilha();

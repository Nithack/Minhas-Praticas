class Gato {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    miar() {
        console.log(`${this.nome} está miando. Miauu!!`)
    }
    comer() {
        console.log(`Deu fome! ${this.nome} está comendo`)
    }
}



const amelie = new Gato('Amelie', 5, 'F');
amelie.miar();
amelie.comer();
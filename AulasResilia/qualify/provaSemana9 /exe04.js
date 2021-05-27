class Pessoa {
    constructor(nome, sobrenome, data) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.dataNascimento = data
    }
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }
    abreviacao() {
        const nomeCompleto = this.nome + ' ' + this.sobrenome
        const token = '.';
        const separator = ' ';
        const names = removePrepositions(nomeCompleto).split(separator);
        const firstName = names[0][0] + '.';
        let surnames = '';
        names
            .filter((name, index) => index)
            .map(name => surnames += `${name.charAt()}${token}`);
        return `${firstName}${surnames.toUpperCase().replace(/.\s*$/, "")}`;
    }
}
function removePrepositions(fullName) {
    return fullName.replace(/\ dos|\ das|\ dos|\ das|\ de|\ d\'/gi, '');
}
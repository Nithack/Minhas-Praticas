class Arr {
    constructor(...elementos) {
        this._arr = [...elementos];
    }

    adiciona(...elementos) {
        this._arr = [...this._arr, ...elementos]
    }

    getArr() {
        return this._arr;
    }

    //implemente aqui os métodos map e filter como solicitado

    map(element) {
        return this._arr.map(element)
    }
    filter(element) {
        return this._arr.filter(element)
    }


}

// map
// Uma callback deverá ser recebida como argumento para este método
// Um array "mapeado" deve ser retornado, no qual cada elemento do array original será transformado pela callback passada como argumento.
// Atenção: O array original não deve ser modificado em hipótese alguma pela callback fornecida

const meuArr = new Arr('atividade', 'qualified', 'funcional', 'oi');
const arrMap = meuArr.map(el => el.toUpperCase()); //retorna ['ATIVIDADE', 'QUALIFIED', 'FUNCIONAL', 'OI']
arrMap._
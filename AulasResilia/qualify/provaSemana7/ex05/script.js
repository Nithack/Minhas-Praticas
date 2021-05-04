function fabricaDicionario() {
    return {
        dic: {},
        novoItem: function (item, desc) {
            this.dic[item] = desc
        },
        pesquisar: function (item) {
            return this.dic[item] ? this.dic[item] : `Não foram encontrados registros para ${item}`
        }
    }

}
function fabricaDicionario() {
    return {
        dic: {},
        novoItem: function (item, desc) {
            this.dic[item] = desc
        },
        pesquisar: function (item) {
            if (this.dic[item]) {
                return this.dic[item]
            }
            return `Não foram encontrados registros para ${item}`
        }
    }

}


let dict = fabricaDicionario()

dict.novoItem("Maçã", "Uma fruta que cresce em árvores");
console.log(dict.pesquisar("Maçã")); // Uma fruta que cresce em árvores
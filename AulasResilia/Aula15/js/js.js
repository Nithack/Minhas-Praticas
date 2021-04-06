// alert(" 1: Atum: R$20,00 /  2: Calabresa : R$22,50 /  3: Portuguesa : R$34,00 / 4: Musarela : R$20,00 / 5: Frango com catupiry  : R$35,00 / 6: Marguerita : R$20,00")

var sabor = prompt("Qual o sabor da pizza ///  1: Atum: R$20,00 /  2: Calabresa : R$22,50 /  3: Portuguesa : R$34,00 / 4: Musarela : R$20,00 / 5: Frango com catupiry  : R$35,00 / 6: Marguerita : R$20,00")
var valorDinheiro = parseInt(prompt("Dinheiro"))


var cardapio = (sabor, valorDinheiro) => {

    if (1) {
        return ()=>{
            alert("A pizza escolhida é de Atum, no valor de R$20,00, " + calcularTroco(valorDinheiro, 20.00))
        }
    } else if (2) {
        return ()=>{
            alert("A pizza escolhida é de Calabresa, no valor de R$22,50, " + calcularTroco(valorDinheiro, 22.50))
        }

    } else if (3) {
        return ()=>{
            alert("A pizza escolhida é de Portuguesa, no valor de R$20,00, " + calcularTroco(valorDinheiro, 34.00))
        }

    } else if (4) {
        return ()=>{
            alert("A pizza escolhida é de Musarela, no valor de R$20,00, " + calcularTroco(valorDinheiro, 20.00))
        }

    } else if (5) {
        return ()=>{
            alert("A pizza escolhida é de Frango com catupiry, no valor de R$35,00, " + calcularTroco(valorDinheiro, 35.00))
        }

    } else {
        return ()=>{
            alert("A pizza escolhida é de Marguerita, no valor de R$20,00, " + calcularTroco(valorDinheiro, 20.00))
        }

    }


}

function calcularTroco(valorDinheiro, valorPizza) {
    if(valorDinheiro > valorPizza){
        return `O Troco sera de  ${valorDinheiro  - valorPizza}`
    }else{
        return `Ǹão sera necessário troco`
    }
}

cardapio(sabor, valorDinheiro)()
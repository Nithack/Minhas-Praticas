// alert(" 1: Atum: R$20,00 /  2: Calabresa : R$22,50 /  3: Portuguesa : R$34,00 / 4: Musarela : R$20,00 / 5: Frango com catupiry  : R$35,00 / 6: Marguerita : R$20,00")

var sabor = parseInt(prompt("Qual o sabor da pizza ///  1: Atum: R$20,00 /  2: Calabresa : R$22,50 /  3: Portuguesa : R$34,00 / 4: Musarela : R$20,00 / 5: Frango com catupiry  : R$35,00 / 6: Marguerita : R$20,00"))



function cardapio (sabor){
    if (sabor == 1) {
        let valorPizza = 20.00
        let nomePizza = "Atum"
        return alertTela(nomePizza, valorPizza)

    } else if (sabor ==2) {
        let valorPizza = 22.50
        let nomePizza = "Calabresa"
        return alertTela(nomePizza, valorPizza)

    } else if (sabor ==3) {
        let valorPizza = 34.00
        let nomePizza = "Portuguesa"
        return alertTela(nomePizza, valorPizza)

    } else if (sabor ==4) {
        let valorPizza = 20.00
        let nomePizza = "Musarela"
        return alertTela(nomePizza, valorPizza)

    } else if (sabor ==5) {
        let valorPizza = 35.00
        let nomePizza = "Frango Com Caturpiry"
        return alertTela(nomePizza, valorPizza)
    } else if (sabor ==6) {
        let valorPizza = 20.00
        let nomePizza = "Marguerita"
       return alertTela(nomePizza, valorPizza)
    } else {
        return () => {
            alert('Pizza não encontrada')
        }
    }
}

function calcularTroco(valorDinheiro, valorPizza) {
    if (valorDinheiro > valorPizza) {
        return `O Troco sera de  ${valorDinheiro - valorPizza}`
    } else {
        return `Ǹão sera necessário troco`
    }
}
function alertTela(nomePizza, valorPizza) {
    var valorDinheiro = parseInt(prompt("Dinheiro"))
    if(valorDinheiro >= valorPizza){
        return () => {
            alert(`A pizza escolhida é de ${nomePizza}, no valor de ${valorPizza}, ${calcularTroco(valorDinheiro, valorPizza)} `)
        }
    }else {
        return ()=>{
            alert("Valor abaixo do valor da pizza")
        }
    }
    
}
cardapio(sabor)()
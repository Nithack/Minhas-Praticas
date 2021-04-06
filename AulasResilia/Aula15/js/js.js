// alert(" 1: Atum: R$20,00 /  2: Calabresa : R$22,50 /  3: Portuguesa : R$34,00 / 4: Musarela : R$20,00 / 5: Frango com catupiry  : R$35,00 / 6: Marguerita : R$20,00")

var sabor = parseInt(prompt("Qual o sabor da pizza: \n1: Atum: R$20,00 \n2: Calabresa : R$22,50 \n3: Portuguesa : R$34,00 \n4: Musarela : R$20,00 \n5: Frango com catupiry  : R$35,00 \n6: Marguerita : R$20,00 \n7: Brocoles com bacon : R$27,00"))

function cardapio(sabor) {
    if (sabor == 1) {
        let valorPizza = 20.00
        let nomePizza = "Atum"
        return alertPizza(nomePizza, valorPizza)

    } else if (sabor == 2) {
        let valorPizza = 22.50
        let nomePizza = "Calabresa"
        return alertPizza(nomePizza, valorPizza)

    } else if (sabor == 3) {
        let valorPizza = 34.00
        let nomePizza = "Portuguesa"
        return alertPizza(nomePizza, valorPizza)

    } else if (sabor == 4) {
        let valorPizza = 20.00
        let nomePizza = "Musarela"
        return alertPizza(nomePizza, valorPizza)

    } else if (sabor == 5) {
        let valorPizza = 35.00
        let nomePizza = "Frango Com Caturpiry"
        return alertPizza(nomePizza, valorPizza)
    } else if (sabor == 6) {
        let valorPizza = 20.00
        let nomePizza = "Marguerita"
        return alertPizza(nomePizza, valorPizza)
    } else if (sabor == 7) {
        let valorPizza = 37.00
        let nomePizza = "Brocoles com bacon"
        return alertPizza(nomePizza, valorPizza)
    }

    else {
        return () => {
            alert('Pizza não encontrada')
        }
    }
}

function alertPizza(nomePizza, valorPizza) {
    let vaiterTroco = (prompt("Vai precisar de troco ? \n1- Sim \n2- Não") == 1) ? true : false
    if (vaiterTroco) {
        var valorDinheiro = parseInt(prompt("Dinheiro"))
        if (valorDinheiro >= valorPizza) {
            return () => {
                alert(`A pizza escolhida é de ${nomePizza}, no valor de R$${valorPizza}, O Troco sera de R$${valorDinheiro - valorPizza}`)
            }
        } else {
            return () => {
                alert(`Valor a ser pago invalido!`)
            }
        }
    } else {
        return () => {
            alert(`A pizza escolhida é de ${nomePizza}, no valor de R$${valorPizza}, não sera necessário troco!`)
        }
    }
}

cardapio(sabor)()

location.reload();
var opcaoPizza = prompt("Escolha sua pizza: \n1 - Atum \n2 - Calabreza \n3 - Portuguesa \n4 - Mussarela \n5 - Frango com Catupiry \n6 - Marguerita")
var opcaoTroco
var valorPgto = 0
var troco = 0


function pizza(opcaoPizza) {
    if (opcaoPizza == 1) {
        return "Atum";
    }
    else if (opcaoPizza == 2) {
        return "Calabresa"
    }
    else if (opcaoPizza == 3) {
        return "Portuguesa"
    }
    else if (opcaoPizza == 4) {
        return "Mussarela"
    }
    else if (opcaoPizza == 5) {
        return "Frango com Catupiry"
    }
    else if (opcaoPizza == 6) {
        return "Marguerita"
    }
    else { "Opção não disponível" }
};

function calcula(opcaoTroco, troco) {
    opcaoTroco = prompt("Quer troco?\n1 - Sim\n2 - Não")
    
    if (opcaoTroco == 2) {
        return (

            0
        )
    }
    else {
        valorPgto = prompt("Digite o valor de pagamento.")
        if (pizza(opcaoPizza) == "Atum") {
            return (
                valorPgto - 20
            )
        }
        else if (pizza(opcaoPizza) == "Calabresa") {
            return (
                valorPgto - 22.5
            )
        }
        else if (pizza(opcaoPizza) == "Portuguesa") {
            return (
                valorPgto - 34
            )
        }
        else if (pizza(opcaoPizza) == "Mussarela") {
            return (
                valorPgto - 20
            )
        }
        else if (pizza(opcaoPizza) == "Frango com Catupiry") {
            return (
                valorPgto - 35
            )
        }
        else if (pizza(opcaoPizza) == "Marguerita") {
            return (
                valorPgto - 20
            )
        }
        else { troco = 0 }
    }
}

alert(pizza(opcaoPizza) + "\nTroco: " + calcula(opcaoTroco, valorPgto, troco))
var nomeAlimento = prompt("Qual Alimento").toLowerCase();
var valorSemanaAnterior = 0
var valorSemanaAtual = 0

if (nomeAlimento == "tomate" || nomeAlimento == "laranja" || nomeAlimento == "abacaxi" || nomeAlimento == "limão" || nomeAlimento =="limao") {
    valorSemanaAnterior = prompt("Valor da semana Anterior")
    if(valorSemanaAnterior >= 0){
        valorSemanaAtual = prompt("Valor da semana Atual")
        if(valorSemanaAtual >= 0){
            if(valorSemanaAtual > valorSemanaAnterior){
                alert('O produto: ' + nomeAlimento + ' aumentou em: R$' + (valorSemanaAtual - valorSemanaAnterior)) 
            }else if( valorSemanaAtual < valorSemanaAnterior){
                alert('O produto: ' + nomeAlimento + ' diminuiu em: R$' + (valorSemanaAnterior - valorSemanaAtual))
            }else{
                alert('O produto: ' + nomeAlimento + ' manteve o mesmo valor')
            }
        }else{
            alert("Valor invalido")
        }
    }else{
        alert("Valor invalido")
    }

} else {
    alert("Produto "+ nomeAlimento +  " não está na lista ")
}

location.reload();
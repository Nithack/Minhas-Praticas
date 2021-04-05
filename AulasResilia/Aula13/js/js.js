
//---------------------VerificarIdade--------------------------

// var idade = prompt("Qual sua idade");
function dirigiBeber (idade){
    if(idade >= 18){
        return function(){
            alert("Posso dirigir e beber, porem não posso dirigir bêbado!");
        }
    }else{
        return ()=>{
            alert("Você não tem idade para dirigir ou beber.");
        };
    };

};

// dirigiBeber(idade)();

//---------------------CalculoKm----------------------------------

// var litroGasolina = prompt("Quantos litros")
// var fazPorLitro = prompt("Quantos km faz por litro")

function calculoKm(litroGasolina, fazPorLitro){
    return ()=>{
       alert("Você pode rodar: " + parseInt(litroGasolina) * parseInt(fazPorLitro) + "KM");
    };
};

// calculoKm(litroGasolina, fazPorLitro)();

//---------------------valorTotalGasolina--------------------------

var valorGasolina = prompt('Qual o valor da gasolina?')
var litrosGasolina = prompt('Quantos litros voce colocou de gasolina?')

var totalValorGasolina = (valorGasolina, litrosGasolina)=>{
    return ()=>{
       alert("Total a ser pago: R$" + parseInt(valorGasolina) * parseInt(litrosGasolina));
    };
};

totalValorGasolina(valorGasolina, litrosGasolina)();
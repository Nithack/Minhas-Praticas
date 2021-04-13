function validarCEP() {
    
    while (true) {
        var EMAIL = prompt('Digite um CEP valido')
        if(EMAIL.length == 8 && typeof(CPF) == Number){
            alert('CEP VALIDO')
            break;
        }else{
            alert('CEP invalido tente novamente')
        }
    } 
}

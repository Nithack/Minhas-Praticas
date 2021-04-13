function validarEmail() {
    
    while (true){
        var EMAIL = prompt('Digite um EMAIL valido')
        if(EMAIL.indexOf('@') > 0){
            alert('EMAIL VALIDO')

            break;
        }else{
            alert('EMAIL invalido tente novamente')
        }
    } 
}
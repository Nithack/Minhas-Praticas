function validarCPF(){
    while (true) {
        var CPF = prompt('Digite um CPF valido')
        if(CPF.length == 11 && typeof(CPF) == Number){
            alert('CPF VALIDO')
            break;
        }else{
            alert('CPF invalido tente novamente')
        }
    } 
}
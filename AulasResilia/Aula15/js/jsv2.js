const email = prompt('Digite um email valido')


function validaEmail(email){
    if (email.indexOf("@") > 0){
        return true;
    }else{ 
        return false;
    };
};

function exibeResultadoValidacao(validaEmail){
    if(validaEmail){
        document.write("<h1>Email valido</h1>");
    }else{
        document.write("<h1>Email invalido</h1>");
    };
};
exibeResultadoValidacao(validaEmail(email))

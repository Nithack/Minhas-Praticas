function linhaAsterisco(numero) {
    var asterisco = '';
    while (asterisco.length < numero) asterisco = asterisco + '*' ;
    return asterisco;
}

function trianguloAsterisco(n){
    var result = '';
    for(var i = 0; i <= n ;i++) result = result + `<center>${linhaAsterisco(i)}<br><center>`;
    document.write(result);
}
trianguloAsterisco(2);

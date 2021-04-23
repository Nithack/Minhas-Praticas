function estilizaHeader(document) {
    //insira aqui seu código!
    const headerAlt = window.document.querySelector('#logo')
    headerAlt.innerText = 'Resilia'
    headerAlt.style.fontSize = 20 + "px";
    const menuAlt = window.document.querySelector('#menu')
    menuAlt.style.display = 'flex'
    menuAlt.style.flexDirection = 'row'
}
estilizarHeader()
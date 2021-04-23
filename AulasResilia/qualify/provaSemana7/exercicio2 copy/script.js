function modifyImg(id, newSrc) {
    //insira aqui seu código
    let imagensSrc = document.getElementsByTagName('img');
    console.log(imagensSrc)
    for (let image of imagensSrc) {
        let status = image.baseURI
        if (status.indexOf(id)) {
            image.src = newSrc
        } else {
            image.src = 'invalidUrl'
        }
        console.log(status)
    }
}
modifyImg()
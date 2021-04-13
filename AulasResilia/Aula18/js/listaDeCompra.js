var tamanho = prompt('Digite o tamanho da lista de compra')
var listaDeCompra = []
var produto = ""
while(listaDeCompra.length < tamanho){
  produto =  prompt('Nome do alimento')
  if(produto.length %2){
    listaDeCompra.push(produto)
  }else{
      alert('Elemento invalido, digite outro elemento')
  }

}
document.write(listaDeCompra)
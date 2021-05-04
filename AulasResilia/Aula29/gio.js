const array = [1, 2, 3, 4, 5, [1, 2, 2]]
var novoArray = array.join().split(",").map((element) => parseInt(element));
console.log(novoArray)


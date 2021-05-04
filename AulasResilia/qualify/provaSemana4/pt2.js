function filterArr(arr) {
    let newArr = []
    arr.forEach(element => {
        if(Number.isInteger(element)){
            newArr.push(element)
        }
    });
    return newArr
}

console.log(filterArr([1,'a','b',0,15]))
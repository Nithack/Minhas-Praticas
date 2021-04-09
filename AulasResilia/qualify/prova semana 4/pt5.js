function contaSorrisos(arr) {
    let result = 0
    arr.forEach(element => {
        if (element == ':)' || element == ':D' || element == ';-D' || element == ':~)' || element == ';~D') {
            result += 1
        }
    });
    return result
}
console.log(contaSorrisos([':D',':~)',';~D',':)']))
const data = [['Rex', 'Labrador', '3 anos']]


function inerder(data) {
    let newData = data.join().split(",")
    let result = ''
    newData.forEach(element => {
        let value = "<p>" + element + "</p>"
        result += value
    })

    return `<div>${result}</div>`
}
console.log(inerder(data))
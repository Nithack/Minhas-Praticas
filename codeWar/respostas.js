//manterei aqui algumas resposta do site codeWar

function likes(names = []) {
    if (!names[0]) {
        return `no one likes this`
    }
    if (names.length == 0) {
        return `${names[0]} likes this`;
    }
    if (names.length == 1) {
        return `${names[0]} and ${names[1]} likes this`;

    }
    if (names.length == 2) {
        return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
    }
    if (names.length >= 3) {
        return `${names[0]}, ${names[1]} and 2 others like this`;
    }
}

var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function() {
    var words = this.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
};


function digital_root(n) {
    let valor = 0
    arrayNumbers = n.toString().split('')
    if (arrayNumbers.length > 1) {
        for (let index in arrayNumbers) {
            valor += Number(arrayNumbers[index])
        }
        digital_root(valor)
    }
    return Number(arrayNumbers)
}

function century(year) {
    if (year % 100 == 0) {
        return year / 100
    }
    return Math.trunc(year / 100) + 1
}

function narcissistic(value) {
    let result = 0
    let arrayValue = value.toString().split('')
    for (let index in arrayValue) {
        result += Math.pow(Number(arrayValue[index]), arrayValue.length)
    }
    return result == value ? true : false
}

function iqTest(numbers) {
    let impar = 0
    let par = 0
    let arrayValue = numbers.split(' ')
    for (let i in arrayValue) {
        if (arrayValue[i] % 2 > 0) {
            impar++
        } else {
            par++
        }
    }
    return (par < impar) ? sendPar(arrayValue) : sendImpar(arrayValue)

    function sendImpar(arrayValue) {
        for (let i in arrayValue) {
            if (arrayValue[i] % 2 > 0) {
                return Number(i) + 1
            }
        }

    }

    function sendPar(arrayValue) {
        for (let i in arrayValue) {
            if (arrayValue[i] % 2 == 0) {
                return Number(i) + 1
            }
        }
    }

}
console.log(iqTest("2 4 7 8 10"))
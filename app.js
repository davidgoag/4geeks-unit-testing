let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

console.log()
//fromDollarToYen
const fromDollarToYen = function(dollar){

    let valueInYen = dollar * ((1/oneEuroIs.USD)*oneEuroIs.JPY);
    return valueInYen;
}
console.log(fromDollarToYen(3));

//fromYenToPound
const fromYenToPound = function(yen){

    let valueInPound = (yen/oneEuroIs.JPY)*oneEuroIs.GBP;
    return valueInPound;
}

console.log(fromYenToPound(1));


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs};


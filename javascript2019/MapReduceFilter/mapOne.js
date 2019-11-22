const numbers = [1, 2, 3, 4, 5]

let doubleNumbers = numbers.map(function(e) {
    return e * 2
})

console.log(doubleNumbers)

const sumTen = e => e + 10
const triple = e => e * 3
const money = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = numbers.map(sumTen).map(triple).map(money)
console.log(result)

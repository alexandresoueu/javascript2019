const numbers = [1, 2, 3, 4, 5]

let numerinhos = numbers.map(function(e) {
    return e * 2
})

console.log(numerinhos)

const sum10 = e => e + 10
const triple = e => e * 3
const money = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = numbers.map(sum10).map(triple).map(money)
console.log(result)

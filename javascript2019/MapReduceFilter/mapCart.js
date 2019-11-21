const cart = [
    '{"name": "Cachorro" , "price": 10.00 }',
    '{"name": "Felino", "price": 12.59 }',
    '{"name": "Papagaio", "price": 15.00}',
    '{"name": "Dino", "price": 49.90 }',
    '{"name": "Peixe", "price": 100.20}'
]

console.log(cart)

let toObj = json => JSON.parse(json)
let onlyPrice = product => product.price

let result = cart.map(toObj).map(onlyPrice)
console.log(result)


let real = result.map(function(callback) {
    return callback
})
let money = callback => `R$ ${parseFloat(callback).toFixed(2).replace('.', ',')}`

result2 = result.map(money) 
console.log(result2)
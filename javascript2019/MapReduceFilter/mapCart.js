const cart = [
    '{"name": "Cachorro" , "price": 10.00 }',
    '{"name": "Felino", "price": 12.59 }',
    '{"name": "Papagaio", "price": 15.00}',
    '{"name": "Dino", "price": 49.90 }',
    '{"name": "Peixe", "price": 100.20}'
]

console.log(cart)

let convertToObj = json => JSON.parse(json)
let onlyPrice = product => product.price

let result = cart.map(convertToObj).map(onlyPrice)
console.log(result)


let money = result.map(function(callback) {
    return callback
})
let real = callback => `R$ ${parseFloat(callback).toFixed(2).replace('.', ',')}`

showReal = result.map(real) 
console.log(showReal)
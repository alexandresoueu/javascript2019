Array.prototype.mymap = function(callback) {
    const newArray = []
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this))
    }
    return newArray
}

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

let result = cart.mymap(toObj).mymap(onlyPrice)
console.log(result)


let real = result.mymap(function(cb) {
    return cb
})
let money = cb => `R$ ${parseFloat(cb).toFixed(2).replace('.', ',')}`

result2 = result.mymap(money) 
console.log(result2)
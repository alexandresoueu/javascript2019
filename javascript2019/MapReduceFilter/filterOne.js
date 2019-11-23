const products = [
    { nome: 'pc gamer', price: 5000, fragil: true },
    { nome: 'mac book', price: 7050, fragil: true },
    { nome: 'cellphone', price: 1109, fragil: false },
    { nome: 'notebook', price: 6600, fragil: false },
    { nome: 'desk', price: 5870, fragil: true }
]

console.log(products.filter(function(cbProd) {
    return cbProd.fragil == false
}))

console.log("================================")
const isExpensive = product => product.price >= 5800
const isFragil = product => product.fragil

console.log(products.filter(isExpensive).filter(isFragil))
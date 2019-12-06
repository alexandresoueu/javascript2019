const responseLegado = {
    content: [
        {
            info: {
                user: {
                    name: 'Rafael',
                    age: 18
                },
                shoes: [
                    { nsu: '234657', color: 'green' },
                    { nsu: '4365hf', color: 'blue' },
                    { nsu: '93853985k', color: 'red' }
                ],
                cars: [
                    {Paulo: 'lastname'},
                    {da: 'lastname'},
                    {'Silva Queiroz': 'lastname'},
                    { nsu: '234657' },
                    { nsu: '234657' }
                ]
            }            
        },
        {
            info: {
                user: {
                    name: 'Ale',
                    age: 21
                },
                shoes: [
                    { nsu: '4365hf', color: 'green' },
                    { nsu: '234657', color: 'blue' }
                ],
                cars: [
                    {'Santana': 'lastname'},
                    {'dos Santos Reis': 'lastname'},
                    { nsu: '234657' },
                    { nsu: '234657' }
                ]
            }
        },
        {
            info: {
                user: {
                    name: 'Ana',
                    age: 10
                },
                shoes: [
                    { nsu: '4365hf', color: 'orange' },
                    { nsu: '234657', color: 'red' }
                ],
                cars: [
                    {'Maria': 'lastname'},
                    {'de Paz Santana': 'lastname'},
                    { nsu: '234657' },
                    { nsu: '234657' }
                ]
            }
        }
    ]
}

const getShoesRafa = responseLegado.content[0].info.shoes.map(function(cb) {
    return cb.color
})

const shoesRafa = getShoesRafa.toString()

const getRafaSurname = responseLegado.content[0].info.cars

const rafaSurname  = getRafaSurname.map(carrinho => Object.keys(carrinho)).reduce((accumulator, current) => accumulator + ' ' + current)

const rafaFullName = responseLegado.content[0].info.user.name + ' ' + rafaSurname.replace(/nsu/g, '')

const getShoesAle = responseLegado.content[1].info.shoes.map(function(cb) {
    return cb.color
})

const shoesAle = getShoesAle.toString()

const getAleSurname = responseLegado.content[1].info.cars
const aleSurname  = getAleSurname.map(carrinho => Object.keys(carrinho)).reduce((accumulator, current) => accumulator + ' ' + current)
const aleFullName = responseLegado.content[1].info.user.name + ' ' + aleSurname.replace(/nsu/g, '')

const obj = {
    [rafaFullName] : shoesRafa,
    [aleFullName] : shoesAle
}
console.log(obj)
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

const result = responseLegado.content.reduce(function(cb) {
    return cb
})

const shoes = result.info.shoes.map(function(cb) {
    return cb.color
})

const shoesColor = shoes.toString()

const getRafaSurname = responseLegado.content[0].info.cars

const rafaSurname  = getRafaSurname.map(carrinho => Object.keys(carrinho)).reduce((accumulator, current) => accumulator + ' ' + current)

const rafaFullName = result.info.user.name + ' ' + rafaSurname.replace(/nsu/g, '')

const obj = {
    [rafaFullName] : shoesColor
}
console.log(obj)
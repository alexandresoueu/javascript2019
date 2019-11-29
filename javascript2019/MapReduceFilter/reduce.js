const students =  [
    { name: 'Angelo', note: 7.0, scholarship: false },
    { name: 'Miguel', note: 9.3, scholarship: false },
    { name: 'Giulia', note: 6.5, scholarship: true },
    { name: 'Fernanda', note: 9.8, scholarship: true }
]
console.log(students.map(children => children.note))
console.log("========================")

const result = students.map(children => children.note).reduce(function(acumulate, actual) {
    console.log(acumulate, actual)
    return acumulate + actual
}, 0)

console.log('======> R: ', result)


const nemo = [0, 1, 2, 3, 4].reduce(function(acc, atu, ind, arr) {
    return acc + atu
})

console.log("Nemo: ", nemo)
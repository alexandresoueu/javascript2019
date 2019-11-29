const http = require('http')

const getClass = (letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`

    http.get(url, res => {
        let result = ''

        res.on('data', data => {
            result += data
        })

        res.on('end', () => {
            callback(JSON.parse(result))
            console.log(result)
        })
    })
} 

let names = []

getClass('A', students => {
    names => names.concat(students.map(children => `A: ${children.nome}`))
    console.log(names)
     getClass('B', students => {
         names => names.concat(students.map(children => `B: ${children.nome}`))
         console.log(names)
         getClass('C', students => {
             names => names.concat(students.map(children => `C: ${children.nome}`))
             console.log(names)
         })
     })

})

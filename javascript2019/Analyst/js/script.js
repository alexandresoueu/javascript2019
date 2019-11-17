let num = document.querySelector('input#num')
let list = document.querySelector('select#list')
let res = document.querySelector('div#res')
let values = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumber(num.value) && !inList(num.value, values)){
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `value ${num.value} added`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Invalid Value....")
    }
    num.value = ''
    num.focus()
}

function end() {
    if(values.length == 0) {
        alert(' add values')
    } else {
        let total = values.length
        let bigger = values[0]
        let smaller = values[0]
        let sum = 0
        let media = 0
        for(let pos in values) {
            sum += values[pos]
            if(values[pos] > bigger)
                bigger = values[pos]
            if(values[pos] < smaller)
                smaller = values[pos]
        }
        media = sum / total

        res.innerHTML = ''
        res.innerHTML += `<p>Have ${total} numbers</p>`
        res.innerHTML += `<p>The bigger number is ${bigger} </p>`
        res.innerHTML += `<p>The smaller number is ${smaller} </p>`
        res.innerHTML += `<p>The sum of numbers is ${sum} </p>`
        res.innerHTML += `<p>The media of numbers is ${media} </p>`
    }
}
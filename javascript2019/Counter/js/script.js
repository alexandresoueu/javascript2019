function count() {
    let start = document.getElementById('start')
    let end = document.getElementById('end')
    let step = document.getElementById('step')
    let res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossible count....'
    } else {
        res.innerHTML = 'Counting ............ <br>'
        let s = Number(start.value)
        let e = Number(end.value)
        let p = Number(step.value)

        if(p <= 0) {
            window.alert('Step invalid! Considering Step 1.')
        }
        if (s < e) {
            for (let count = s; count <= e; count += p) {
                res.innerHTML += ` ${count} \u{1F449}`
            }
        } else {
            for (let count = s; count >= e; count -= p) {
                res.innerHTML += ` ${count} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
function fatorial(n) {
    let fat = 1
    for (let count = n; count > 1; count--) {
        fat *= count
    }
    return fat
}

console.log(fatorial(5))

//5! = 5 x 4 x 3 x 2 x 1 = 120

//RECURSIVIDADE

function fatorialRecursivo(r) {
    if(r == 1) {
        return 1
    } else {
        return r * fatorialRecursivo(r - 1)
    }
}

console.log('RECURSIVO', fatorialRecursivo(5))

/* 5! = 5 x 4!
 n! = n x (n -1 )!

 1! = 1

 */

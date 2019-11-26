Array.prototype.myreduce = function(callback, initialValue) {
    const indexInitial = initialValue ? 0 : 1
    let acumulador = initialValue || this[0]
    for (let index = indexInitial; index < this.length; index++) {
        acumulador = callback(acumulador, this[index], index, this)
    }
    return acumulador
}

const sum = (total, value) => total + value
const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.myreduce(sum, 21))
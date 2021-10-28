const removeDupe = (arr) => {
    const checkingSet = new Set()
    arr.forEach((value, idx) => checkingSet.has(value) ? arr.splice(idx,1) : checkingSet.add(value));
    return arr;
}
console.log(removeDupe([8, 9, 9, 10, 2, 2, 34]))

const removeDupe2 = (arr) => {
    arr = Array.from(new Set(arr))
    return arr;
}
console.log(removeDupe2([8, 9, 9, 10, 2, 2, 34]))
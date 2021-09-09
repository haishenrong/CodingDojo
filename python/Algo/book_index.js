// Write a function that given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"

// ============================
// Instructor's Solution
// ============================

function bookIndex(arr) {
    var index = ''
    arr.forEach((val, idx) => {
        if(idx === 0 || val !== arr[idx-1]+1)
            index = index + ", " + val 
        else if (idx === arr.length-1 || val === arr[idx-1]+1){
            index.charAt(index.length-(String(arr[idx-1]).length+1)) === '-' ?
            index = index.substring(0,index.lastIndexOf('-')+1)+val :
            index = index + '-' + val
        }
    })
    return index.substring(2)
}

console.log(bookIndex([1,3,4,5,7,8,10,12]))
console.log(bookIndex([1,2,3,4,5,6,7,8,9,10,11,12]))
console.log(bookIndex([1,3,4,5,7,8,10,12,100,101,102,104,105,106,107]))

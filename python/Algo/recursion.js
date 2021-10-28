const recursiveFib = (val) => {
    if(val <= 0 ){
        console.log("Value must be positive.")
        return -1
    } 
    if(val == 1 || val == 2)
        return 1;
    return recursiveFib(val-1) + recursiveFib(val-2)
}

//                              recursiveFib(5)
//           recursiveFib(4) +                  recursiveFib(3)
// recursiveFib(3) + recursiveFib(2) + recursiveFib(2) + recursiveFib(1)
// rF(2) + rF(1)            + 1             + 1                + 1
//  1      + 1               + 1             + 1                 + 1         = 5

// 1 1 2 3 5 8 13 21 34
// 3rd: 1 + 1 = 2
// 4th: 1 + 2 = 3
// 5th: 2 + 3 = 5

const recursiveSigma = (val) => {
    if(val == 1)
        return 1
    return val + recursiveSigma(val-1)
}

// recursiveSigma(6)
// 6 + recursiveSigma(5)
// 6 + 5 + recursiveSigma(4)
// 6 + 5 + 4 + recursiveSigma(3)
//...
// 6+5+4+3+2+1

const recursiveFactorial = (val) => {
    if(val == 1)
        return 1
    return val * recursiveFactorial(val-1)
}

// recursiveSigma(6)
// 6 * recursiveSigma(5)
// 6 * 5 * recursiveSigma(4)
// 6 * 5 * 4 * recursiveSigma(3)
//...
// 6+5+4+3+2+1


/*
console.log(recursiveFib(8))
console.log(recursiveSigma(6))
console.log(recursiveFactorial(6))*/

const gcf = (val1, val2) => {
    if (val2 === 0) { 
        return val1; 
    } 
    return gcf(val2, val1 % val2); 
}
/*
console.log(gcf(50, 20)); // 25
console.log(gcf(25, 50)); // 25
console.log(gcf(50,180)); // 10
console.log(gcf(7,35)); // 7
console.log(gcf(65,95)); // 5*/

// iterative / helps with explaining    65   30    95 =  65 + 30 ->    30 5   60 = 5 + 30 + 30
const gcf2 = (val1, val2) => {  
    while(val1%val2 != 0)
    {
        while(val2 > val1){
            val2 = val2 - val1
        }
        var dummy = val1
        val1 = val2
        val2 = dummy
    }
    return val2
}
/*
console.log(gcf2(50, 25)); // 25
console.log(gcf2(25, 50)); // 25
console.log(gcf2(50,180)); // 10
console.log(gcf2(7,35)); // 7
console.log(gcf2(65,95)); // 5
*/

const recursiveBinarySearch = (arr, val, position, counter) => {
    if(counter == 0){
        return false
    }
    if(counter == -1){
        counter = Math.floor(arr.length/2) 
    } 
    else {
        counter%2==0 ? counter = counter/2 : counter = Math.ceil(counter)
    }
    if(arr[position+counter] == val)
        return position+counter
    else if (arr[position+counter] < val)
        return recursiveBinarySearch(arr, val, position + counter, counter)
    else
        return recursiveBinarySearch(arr, val, position , counter)
}
/*
console.log(recursiveBinarySearch ([1, 2],-2, 0, -1));
console.log(recursiveBinarySearch ([1, 2], 4, 0, -1));
console.log(recursiveBinarySearch ([1, 2], 1, 0, -1));
console.log(recursiveBinarySearch ([1, 2, 2], 2, 0 ,-1));
console.log(recursiveBinarySearch ([],7, 0, -1));
console.log(recursiveBinarySearch ([1, 2, 2, 2, 2, 2, 2, 4, 5, 5, 5, 6, 6, 6], 2, 0, -1));
console.log(recursiveBinarySearch ([1, 1, 1, 1, 1],1, 0, -1));
console.log(recursiveBinarySearch ([1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9 ,10], 8, 0, -1));
console.log(recursiveBinarySearch ([1, 2, 4, 6, 9, 11], 4, 0, -1));
*/
var arr = []
for( var i = 0; i< 1400; i++)
    arr.push(i)
for( var i = 0; i< 1400; i++)
    console.log(recursiveBinarySearch(arr, i, 0, -1));
/*
console.log(recursiveBinarySearch2([1, 2],-2, 0, -1));
console.log(recursiveBinarySearch2([1, 2], 4, 0, -1));
console.log(recursiveBinarySearch2([1, 2], 1, 0, -1));
console.log(recursiveBinarySearch2([1, 2, 2], 2, 0 ,-1));
console.log(recursiveBinarySearch2([],7, 0, -1));
console.log(recursiveBinarySearch2([1, 2, 2, 2, 2, 2, 2, 4, 5, 5, 5, 6, 6, 6], 2, 0, -1));
console.log(recursiveBinarySearch2([1, 1, 1, 1, 1],1, 0, -1));
console.log(recursiveBinarySearch2([1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9 ,10], 8, 0, -1));*/

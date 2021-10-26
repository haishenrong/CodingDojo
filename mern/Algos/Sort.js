const bubbleSort = (arr) => {
    for(var i = 0; i<arr.length-1 ; i++){
        for(var j = 0; j<arr.length-i-1 ; j++)
            if(arr[j]>arr[j+1]){
                var dummy = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = dummy
            }
    }
    return arr
}

const selectionSort = (arr) => {
    let min = 0;
    for(var i = 0; i<arr.length ;i++){
        min = i
        for(var j = i; j<arr.length; j++){
            if(arr[j]<arr[min])
                min = j
        }
        var sub = arr[min]
        arr[min] = arr[i]
        arr[i] = sub
    }
    return arr
}

const quickSort = (arr, low=0, high=arr.length-1) => {
    if(high <= low) return;
    let pivot = parition(arr, low, high);
    quickSort(arr, low, pivot);
    quickSort(arr,pivot+1, high);
    return arr;
}

const parition =(arr, low, high) => {
    let randomPos = Math.floor(Math.random()*(high-low+1));
    let i = low;
    let j = high;
    while(i<j || j>i){
        while(i<arr.length && arr[i]<arr[randomPos])
            i++;
        while(j>=0 && arr[j]>arr[randomPos])
            j--;
        if(i>=j){
            [arr[j], arr[randomPos]] = [arr[randomPos],arr[j]];
            return j;
        } else {
            [arr[j], arr[i]] = [arr[i],arr[j]];
        }
    }

}

var arr = [15, 23, 4, 6, 89, 1, 20, 5, 343, 981, 25, 67, 101, 2]
console.log(quickSort(arr));
//console.log(selectionSort(arr))
//console.log(bubbleSort(arr))
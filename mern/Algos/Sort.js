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

const insertionSort = (arr) => {
    for(var i = 1; i<arr.length;i++){
        j = i;
        while (j>0 && arr[j-1]>arr[j]){
            [arr[j-1], arr[j]]=[arr[j],arr[j-1]];
            j--;
        }
    }
    return arr;
} 

const mergeSort = (arr) => {
    if(arr.length == 1) return arr;
    var arrLow = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
    var arrHigh = mergeSort(arr.slice(Math.floor(arr.length/2)));
    return merge(arrLow, arrHigh);
}

const merge = (arr1, arr2) => {
    var resArray = [];
    var i = 0;
    var j = 0;
    while(i<arr1.length && j<arr2.length)
        arr1[i]<arr2[j] ? (resArray.push(arr1[i]),i++) : (resArray.push(arr2[j]),j++)
    resArray = i>=arr1.length ? resArray.concat(arr2.slice(j)) : resArray.concat(arr1.slice(i));
    return resArray;
}

const quickSort = (arr, low=0, high=arr.length-1) => {
    if(high <= low) return;
    let pivot = parition(arr, low, high);
    //console.log(low, high, pivot);
    quickSort(arr, low, pivot);
    quickSort(arr,pivot+1, high);
    return arr;
}

const parition =(arr, low, high) => {
    let randomPos = low+Math.floor(Math.random()*(high-low+1));
    [arr[randomPos], arr[high]] = [arr[high],arr[randomPos]];
    let i = low-1;
    let j = high;
    while(true){
        i++;
        while(arr[i]<arr[high])
            i++;
        j--;
        while(arr[j]>arr[high])
            j--;
        if(i>=j){
            //[arr[j], arr[i]] = [arr[i],arr[j]];
            //[arr[j], arr[low]] = [arr[low],arr[j]];
            return j;
        } else {
            [arr[j], arr[i]] = [arr[i],arr[j]];
        }
    }

}

var arr = [15, 23, 445, 4, 6, 89, 1, 20, 5, 343, 981, 25, 67, 101, 2]
var arr2 = [277, 2256, 3303, 3588, 3672, 3822, 4987, 5010, 5116, 5186, 5216, 5220, 5627, 6297, 6903, 6925, 7013, 8110, 8350, 9815]
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeSort(arr));
console.log(mergeSort(arr2));
//console.log(selectionSort(arr))
//console.log(bubbleSort(arr))
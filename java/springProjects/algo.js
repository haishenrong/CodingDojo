var i = []

const test = (arr) => {
    for(var j = 1; j <= 100; j++){
        var sum = 0;
        for(var k = 1; k<=100; k++){
            var bigHops = Math.floor(k/j);
            var littleHops = k%j-1;
            sum += (1/100)*(bigHops+littleHops);
        }
        arr.push(sum);
    }
    return arr;
}

var z = []
const test2 = (arr) => {
    for(var j = 1; j <= 100; j++){
        var sum = 0;
        for(var k = 1; k<=100; k++){
            var bigHops = Math.trunc(k/j);
            var littleHops = k%j==0? k%j: k%j-1;
            sum = Math.max(sum,(bigHops+littleHops));
        }
        arr.push(sum);
    }
    return arr;
}

var y = [];
const test3 = (arr) => {
    var sum = 0;
    var l = 14;
    for(var j = 1; j <= 100; j++){
        var sum = 0;
        for(var k = 1; k<=100; k++){
            var test = k;
            while(test > 0){
                test -= l;
                l--;
            }
            test = test + l+1;
            l=16;
            sum += (1/100)*(test+(16-(l+1)));
            //console.log(sum);
        }
        arr.push(sum);
    }
    return arr;
}
console.log(test(i));
console.log(test2(z));
console.log(test3(y));
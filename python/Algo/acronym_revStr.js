const acronym = (str) => {
    var sol = "";
    for(var i = 0; i<str.length;i++){
        if(i===0 || (str.charAt(i-1)===" " && str.charAt(i) !== " "))
            sol = sol + str.charAt(i).toUpperCase();
    }
    return sol;
}

console.log(acronym("there's no free lunch - gotta        pay yer way "));


const reverseStr = (str) => {
    var sol = "";
    for(var i = str.length-1; i>=0;i--)
        sol+=str.charAt(i);
    return sol;
}

console.log(reverseStr('hello world'));
function parensValid(str){
    var stack= [];
    str.split("").forEach(char => {
        if(char==='(')
            stack.push('(');
        if(char === ')' && stack.length > 0)
            stack.pop();
        else if (char === ')' && stack.length === 0)
            return false;
    })
    if(stack.length === 0)
        return true;
    else
        return false; 
}

console.log("For each parensValid");
console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));
console.log(parensValid("((()))"));
console.log(parensValid("()()()()()()("));

function parensValid2(str){
    var stack =[];
    for(var i = 0; i< str.length;i++){
        if(str.charAt(i)==='(')
            stack.push('(');
        if(str.charAt(i) === ')' && stack.length > 0)
            stack.pop();
        else if (str.charAt(i) === ')' && stack.length === 0)
            return false;
    }
    if(stack.length === 0)
        return true;
    else
        return false; 
}

console.log("For loop parens valid");
console.log(parensValid2("y(3(p)p(3)r)s"));
console.log(parensValid2("n(0(p)3"));
console.log(parensValid2("n)0(t(o)k"));
console.log(parensValid2("((()))"));
console.log(parensValid2("()()()()()()("));

function bracesValid(str) {
    var stack =[];
    for(var i = 0; i< str.length;i++){
        if(str.charAt(i)==='(')
            stack.push('(');
        if(str.charAt(i)==='{')
            stack.push('{');
        if(str.charAt(i)==='[')
            stack.push('[');
        if(str.charAt(i) === ')' && stack.length > 0 && stack[stack.length-1]==='(')
            stack.pop();
        else if (str.charAt(i) === ')' && (stack.length === 0 || stack[stack.length-1]!=='('))
            return false;
        if(str.charAt(i) === ']' && stack.length > 0 && stack[stack.length-1]==='[')
            stack.pop();
        else if (str.charAt(i) === ']' && (stack.length === 0 || stack[stack.length-1]!=='['))
            return false;
        if(str.charAt(i) === '}' && stack.length > 0 && stack[stack.length-1]==='{')
            stack.pop();
        else if (str.charAt(i) === '}' && (stack.length === 0 || stack[stack.length-1]!=='{'))
            return false;
    }
    if(stack.length === 0)
        return true;
    else
        return false; 
}

console.log('Easy to understand Braces');
console.log(bracesValid("({[({})]})"));
console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));

// Ascii codes: (<[{}]>)
var arr = [[40, 60, 91, 123], [41, 62, 93, 125]];

function bracesValid2(str){
    var stack =[];
    for(var i = 0; i< str.length;i++){
        
        if(arr[0].includes(str.charCodeAt(i)))
            stack.push(str.charAt(i));
        if(arr[1].includes(str.charCodeAt(i)))
            if((str.charCodeAt(i) === stack[stack.length-1].charCodeAt(0)+1 || 
                str.charCodeAt(i) === stack[stack.length-1].charCodeAt(0)+2)  && 
                (arr[1].includes(str.charCodeAt(i)) && stack.length > 0))
                stack.pop();
            else
                return false;
    }
    if(stack.length === 0)
        return true;
    else
        return false; 
}

console.log('ASCII Braces');
console.log(bracesValid2("({[({})]})"));
console.log(bracesValid2("d(i{a}l[t]o)n{e!"));
console.log(bracesValid2("{{[a]}}(){bcd}{()}"));
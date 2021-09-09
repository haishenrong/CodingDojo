function generateCoinChange(money){
    var coins = [0, 0, 0, 0]
    var sol = ""
    while(money>=.25){
        coins[0]+=1
        money-=.25
    }
    if(coins[0]>1)
        sol= coins[0]+" quarters, "
    if(coins[0]===1)
        sol= coins[0]+" quarter, "
    while(money>=.10){
        coins[1]+=1
        money-=.10
    }
    if(coins[1]>1) sol=sol+ coins[1]+" dimes, "
    if(coins[1]===1) sol=sol+ coins[1]+" dime, "
    while(money>=.05){
        coins[2]+=1
        money-=.05
    }
    if(coins[2]>1) sol=sol+ coins[2]+" nickels, "
    if(coins[2]===1) sol=sol+ coins[2]+" nickel, "
    while(money>=.01){
        coins[3]+=1
        money-=.01
    }
    if(coins[3]>1) sol=sol+ coins[3]+" pennies, "
    if(coins[3]===1) sol=sol+ coins[3]+" penny, "
    return sol.substring(0, sol.length-2);
}

// 1.23 -> 4Q 2D 0N 3P

console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies

function generateCoinChange2(money){
    var coins = [0, 0, 0, 0]
    for(money; money>=.25; money -=.25)
        coins[0]+=1
    for(money; money>=.10; money -=.10)
        coins[1]+=1
    for(money; money>=.05; money -=.05)
        coins[2]+=1
    for(money; money>=.01; money -=.01)
        coins[3]+=1
    return coins[0]+" quarter(s), "+coins[1]+" dime(s), "+coins[2]+" nickel(s), "+coins[3]+" penny(ies)";
}

console.log(generateCoinChange2(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange2(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange2(4.57)) // 18 quarters, 1 nickel, 2 pennies

var bob = 3
console.log(`${bob}`)
class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack = (target) => target.res -= this.power;

    showStats = () => console.log("Name:",this.name+",",
    "Cost:", this.cost+",", "power:", this.power+",",
    "Resilience:", this.res);
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play = target => {
        if(target instanceof Unit) {
            this.stat == "power" 
                ? target.power += this.magnitude 
                : target.res+= this.magnitude;
        } else
            throw new Error("Target must be a unit!");    
    }
}

let redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
let blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
let hardAlgorithm = new Effect("Hard Algorithm", 2, 
    "Increase target's resillience by 3", "resillience", 3);
let unhandledPromiseRejection = new Effect("Unhandled Promise Rejection",
    1, "Reduce target's resilience by 2", "resilience", -2);
let pairProgramming = new Effect("Pair programming", 3,
    "Increase target's power by 2", "power", 2);

hardAlgorithm.play(redBeltNinja);
redBeltNinja.showStats();
unhandledPromiseRejection.play(redBeltNinja);
redBeltNinja.showStats();
pairProgramming.play(redBeltNinja);
redBeltNinja.showStats();
redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.showStats();

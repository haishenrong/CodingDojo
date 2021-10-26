class Ninja {
    constructor(name, health=100){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName = () => console.log(this.name);

    showStats = () => console.log("Name:",this.name+",",
    "Strength:", this.strength+",", "Speed:", this.speed+",",
    "Health:", this.health);

    drinkSake = () => this.health += 10;
}

class Sensei extends Ninja{
    constructor(name){
        super(name, 210);
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }

    speakWisdom = () => console.log("Soon, there will be nothing.")
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

class Warrior {
    constructor(name, life, power) {
        this.name = name;
        this.life = life;
        this.power = power;
    }

attack(){
    console.log(`Power: ${power}`);
    return this.power;
};

defend(damage) {
    this.life = this.life - damage
    if (this.life >= 0) {
        console.log(`${this.name} remaining life: ${this.life}`);
    } else {
        console.log(`${this.name} is dead`);
    };
}
};

class Maya extends Warrior {
    constructor(name, life, power) {
        super(name, life, power);
    };

    drinkColaCao() {
        this.power = this.power + 10;
        console.log(`${this.name} now has ${this.power} power!`);
    };
};

class Aztec extends Warrior {
    constructor(name, life, power) {
        super(name, life, power);
    };

    drinkNesquik() {
        this.life = this.life + 10;
        console.log(`${this.name} now has ${this.life} life!`);
    };
};

let colacaoMayan = new Maya('Maya', 10, 8);
let nesquikAztec = new Aztec('Aztec', 10, 10);
nesquikAztec.drinkNesquik();
colacaoMayan.drinkColaCao();
nesquikAztec.defend(colacaoMayan.attack());
colacaoMayan.defend(nesquikAztec.attack());
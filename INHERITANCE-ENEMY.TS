// INI TUGAS

class Enemy {
  health: number;

  constructor(health: number) {
    this.health = health;
  }

  baseHealth(): number {
    return this.health;
  }
}

class Minions extends Enemy {
  constructor(health: number) {
    super(health);
  }

  baseHealth(): number {
    return (this.health += 30);
  }
}

class MinionFighter extends Enemy {
  physicalAttack: number;

  constructor(health: number) {
    super(health);
    this.physicalAttack = 15;
  }
}

class MinionArcher extends Enemy {
  attackRange: number;

  constructor(health: number) {
    super(health);
    this.attackRange = 40;
  }
}

class MinionMage extends Enemy {
  magicalAttack: number;

  constructor(health: number) {
    super(health);
    this.magicalAttack = 20;
  }
}

class SuperMinion extends Enemy {
  physicalDefense: number;

  constructor(health: number) {
    super(health);
    this.physicalDefense = 50;
  }
}

class Lord extends Enemy {
  attack: number;

  constructor(health: number) {
    super(health);
    this.attack = 100;
  }
}

class Turtle extends Enemy {
  shield: number;

  constructor(health: number) {
    super(health);
    this.shield = 400;
  }
}

class RedDragon extends Enemy {
  physicalAttack: number;

  constructor(health: number) {
    super(health);
    this.physicalAttack = 25;
  }
}

class BlueWolf extends Enemy {
  manaRegen: number;

  constructor(health: number) {
    super(health);
    this.manaRegen = 30;
  }
}

// Memanggil objek Minions
const minion = new Minions(10);
console.log("Health Minions:", minion.baseHealth());

// Memanggil objek MinionFighter
const minionFighter = new MinionFighter(100);
console.log("Health Minion Fighter:", minionFighter.baseHealth());
console.log("Physical Attack:", minionFighter.physicalAttack);

// Memanggil objek MinionArcher
const minionArcher = new MinionArcher(150);
console.log("Health Minion Archer:", minionArcher.baseHealth());
console.log("Attack Range:", minionArcher.attackRange);

// Memanggil objek MinionMage
const minionMage = new MinionMage(200);
console.log("Health Minion Mage:", minionMage.baseHealth());
console.log("Magical Attack:", minionMage.magicalAttack);

// Memanggil objek SuperMinion
const superMinion = new SuperMinion(500);
console.log("Health Super Minion:", superMinion.baseHealth());
console.log("Physical Defense:", superMinion.physicalDefense);

// Memanggil objek Lord
const lord = new Lord(5000);
console.log("Health Lord:", lord.baseHealth());
console.log("Attack Lord:", lord.attack);

// Memanggil objek Turtle
const turtle = new Turtle(3500);
console.log("Health Turtle:", turtle.baseHealth());
console.log("Shield Turtle:", turtle.shield);

// Memanggil objek RedDragon
const redDragon = new RedDragon(2000);
console.log("Health Red Dragon:", redDragon.baseHealth());
console.log("Physical Attack Red Dragon:", redDragon.physicalAttack);

// Memanggil objek BlueWolf
const blueWolf = new BlueWolf(2000);
console.log("Health Blue Wolf:", blueWolf.baseHealth());
console.log("Mana Regen:", blueWolf.manaRegen);
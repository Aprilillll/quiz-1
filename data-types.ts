let name : string 
let health : number 
let speed : number
let defense : number 
let attack : number
let npcType : walk | fly

constructor(
    name : string
    health : number
    speed : number
    defense : number
    attack : number
    npcType : walk | fly
){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.defense = number;
    this.attack = number;
    this.npcType = npcType;
}

walking(): void {
this.speed += 2;
console.log(${this.name} sedang berjalan. speed saat ini : $ {this.speed}):
}

attacking(): void {
    this.attack += 2;
    console.log(${this.name}melakukan attack! speed saat ini : $ {this.speed})
}

sprinting(): void {
    this.sprint += 4;
    console.log(${this.name} melakukan sprint! speed saat ini : $ {this.speed})
}

ultimateskill(): void {
    this.ultimatestill +=10;
    console.log(${this.name} menggunakan ultimateskill. speed saat ini : $ {this.speed})
}

const heronpc = new npc ("naga", 100, 10, 5, 15,"walk")
naganpc.walking();
naganpc.attacking();
naganpc.sprinting();
naganpc.ultimateskill();
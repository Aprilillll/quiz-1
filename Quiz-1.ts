//  SOAL: Mario Bros dengan OOP (TypeScript)

class Mario {
  hp: number;
  speed: number;
  positionX: number;
  positionY: number;
  invincible: boolean;
  currentForm: string;

  constructor() {
    this.hp = 1;
    this.speed = 5;
    this.positionX = 0;
    this.positionY = 0;
    this.invincible = false;
    this.currentForm = 'mario';
  }

  // Method bergerak
  moveRight(): void {
    this.positionX += this.speed;
  }

  moveLeft(): void {
    this.positionX -= this.speed;
  }

  // Method diserang
  takeDamage(): void {
    if (this.invincible) {
      console.log("Mario kebal terhadap serangan!");
      return;
    }

    this.hp -= 1;
    this.currentForm = 'mario';
  }
}

// Subclass SuperMushroom (Inheritance dari Mario)
class SuperMushroom extends Mario {
  constructor(mario: Mario) {
    super();
    // Mengambil status terakhir Mario dan memberikan efek Jamur
    this.hp = mario.hp + 1;
    this.speed = mario.speed;
    this.positionX = mario.positionX;
    this.positionY = mario.positionY;
    this.invincible = mario.invincible;
    this.currentForm = 'super mario';
  }
}

// Subclass FireFlower (Inheritance dari Mario)
class FireFlower extends Mario {
  constructor(mario: Mario) {
    super();
    // Mengambil status terakhir Mario dan memberikan efek Bunga
    this.hp = mario.hp + 1;
    this.speed = mario.speed;
    this.positionX = mario.positionX;
    this.positionY = mario.positionY;
    this.invincible = mario.invincible;
    this.currentForm = 'fire mario';
  }

  // Method khusus Fire Mario (Polymorphism / Ability Baru)
  shootFireball(): void {
    console.log("Fire Mario menembakkan bola api!");
  }
}

// Subclass SuperStar (Inheritance dari Mario)
class SuperStar extends Mario {
  constructor(mario: Mario) {
    super();
    // Mengambil status terakhir Mario dan memberikan efek Bintang
    this.hp = mario.hp;
    this.speed = mario.speed;
    this.positionX = mario.positionX;
    this.positionY = mario.positionY;
    this.invincible = true;
    this.currentForm = mario.currentForm;
  }
}


// PEMANGGILAN OBJEK DAN PENGUJIAN

// 1. Inisialisasi Objek Mario Default
let mario = new Mario();
console.log("--- Initial Mario ---");
console.log("Form:", mario.currentForm);
console.log("HP:", mario.hp);
console.log("Position X:", mario.positionX);

// 2. Bergerak ke Kanan & Kiri
mario.moveRight();
mario.moveRight();
console.log("\n--- Mario Bergerak ---");
console.log("Position X setelah 2x moveRight:", mario.positionX); // 10

mario.moveLeft();
console.log("Position X setelah 1x moveLeft:", mario.positionX); // 5

// 3. Mengambil SuperMushroom
mario = new SuperMushroom(mario);
console.log("\n--- Mario Mengambil SuperMushroom ---");
console.log("Form:", mario.currentForm); // super mario
console.log("HP:", mario.hp); // 2

// 4. Mengambil FireFlower
mario = new FireFlower(mario);
console.log("\n--- Mario Mengambil FireFlower ---");
console.log("Form:", mario.currentForm); // fire mario
console.log("HP:", mario.hp); // 3

// Menembakkan bola api (karena tipe saat ini adalah FireFlower)
(mario as FireFlower).shootFireball();

// 5. Mengambil SuperStar
mario = new SuperStar(mario);
console.log("\n--- Mario Mengambil SuperStar ---");
console.log("Status Kebal (Invincible):", mario.invincible); // true

// 6. Mario Diserang saat Kebal
mario.takeDamage();
console.log("\n--- Mario Diserang Saat Kebal ---");
console.log("HP:", mario.hp); // 3 (tidak berkurang)

// 7. Hilangkan status kebal dan diserang kembali
mario.invincible = false;
mario.takeDamage();
console.log("\n--- Mario Diserang Saat TIDAK Kebal ---");
console.log("HP:", mario.hp); // 2
console.log("Form:", mario.currentForm); // kembali ke 'mario'
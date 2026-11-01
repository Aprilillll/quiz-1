//Parent Class
class LibraryItem {
  constructor(
    public title: string,
    protected loanDays: number,
  ) {}

  getInfo(): string {
    return `Title: ${this.title}, Loan Days: ${this.loanDays}`;
  }
}

//Child Class
//extends digunakan untuk membuat class baru yang mewarisi properti dan method dari class induk (parent class). Dengan menggunakan extends, class anak (child class) dapat mengakses properti dan method dari class induk, serta menambahkan properti dan method tambahan sesuai kebutuhan.
class Books extends LibraryItem {
  constructor(title: string, author: string) {
    super(title, 7);
  }
}

//Child Class
class Magazines extends LibraryItem {
  constructor(title: string) {
    super(title, 3);
  }
}

const book = new Books("Laskar Pelangi", "F. Scott Fitzgerald");

console.log(book.getInfo());
function tampilkanArray<T>(items: T[]): void {
    items.forEach((item) => console.log(item));
}

tampilkanArray<string>(["satu", "dua"]);
tampilkanArray<number>([1, 2, 3]);

class Kotak<T> {
    isi: T;

    constructor(isi: T) {
        this.isi = isi;
    }

    lihat(): void {
        console.log("Isi kotak:", this.isi);
    }
}

const kotakString = new Kotak<string>("Pensil");
kotakString.lihat(); // Isi kotak: Pensil
const kotakAngka = new Kotak<number>(123);
kotakAngka.lihat(); // Isi kotak: 123
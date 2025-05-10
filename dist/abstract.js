"use strict";
class Hewan {
    constructor(nama) {
        this.nama = nama;
    }
    info() {
        console.log(`Ini adalah hewan bernama ${this.nama}`);
    }
}
class Kucing extends Hewan {
    bersuara() {
        console.log("Meong!");
    }
}
const hewan1 = new Kucing("Mimi");
hewan1.info(); // Output: Ini adalah hewan bernama Mimi
hewan1.bersuara(); // Output: Meong!

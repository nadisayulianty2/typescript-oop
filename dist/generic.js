"use strict";
function tampilkanArray(items) {
    items.forEach((item) => console.log(item));
}
tampilkanArray(["satu", "dua"]);
tampilkanArray([1, 2, 3]);
class Kotak {
    constructor(isi) {
        this.isi = isi;
    }
    lihat() {
        console.log("Isi kotak:", this.isi);
    }
}
const kotakString = new Kotak("Pensil");
kotakString.lihat(); // Isi kotak: Pensil
const kotakAngka = new Kotak(123);
kotakAngka.lihat(); // Isi kotak: 123

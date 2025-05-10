"use strict";
class Orang {
    constructor(nama) {
        this.nama = nama;
    }
    perkenalan() {
        console.log(`Halo, saya ${this.nama}`);
    }
}
class Dosen extends Orang {
    constructor(nama, mataKuliah) {
        super(nama); // memanggil constructor class Orang
        this.mataKuliah = mataKuliah;
    }
    mengajar() {
        console.log(`${this.nama} mengajar mata kuliah ${this.mataKuliah}`);
    }
}
const dosen1 = new Dosen("Bu Ani", "Pemrograman Web");
dosen1.perkenalan(); // Output: Halo, saya Bu Ani
dosen1.mengajar(); // Output: Bu Ani mengajar mata kuliah Pemrograman Web

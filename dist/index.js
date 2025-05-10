"use strict";
class Mahasiswa {
    constructor(nama, nim) {
        this.nama = nama;
        this.nim = nim;
    }
    belajar() {
        console.log(`${this.nama} dengan NIM ${this.nim} sedang belajar TypeScript`);
    }
}
const mhs1 = new Mahasiswa("Rina", "105011900001");
mhs1.belajar();

"use strict";
class Mahasiswa2 {
    constructor(nama, nim) {
        this.nama = nama;
        this.nim = nim;
    }
    belajar() {
        console.log(`${this.nama} sedang belajar.`);
    }
}
const daftarMahasiswa = [
    new Mahasiswa2("Rina", "10501"),
    new Mahasiswa2("Andi", "10502"),
    new Mahasiswa2("Siti", "10503"),
];
for (const m of daftarMahasiswa) {
    m.belajar();
}

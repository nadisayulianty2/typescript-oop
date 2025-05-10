"use strict";
class Kendaraan {
    constructor(merk, tahun) {
        this.merk = merk;
        this.tahun = tahun !== null && tahun !== void 0 ? tahun : 2024;
    }
    info() {
        console.log(`${this.merk} keluaran tahun ${this.tahun}`);
    }
}
const k1 = new Kendaraan("Toyota");
const k2 = new Kendaraan("Honda", 2020);
k1.info(); // Toyota keluaran tahun 2024
k2.info(); // Honda keluaran tahun 2020

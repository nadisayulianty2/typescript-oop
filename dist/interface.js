"use strict";
class Mobil {
    constructor(merk) {
        this.merk = merk;
    }
    jalan() {
        console.log(`${this.merk} sedang berjalan...`);
    }
}
const m = new Mobil("Toyota");
m.jalan();

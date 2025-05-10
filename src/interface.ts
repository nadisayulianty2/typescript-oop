interface Kendaraan2 {
    merk: string;
    jalan(): void;
}

class Mobil implements Kendaraan2 {
    merk: string;

    constructor(merk: string) {
        this.merk = merk;
    }

    jalan(): void {
        console.log(`${this.merk} sedang berjalan...`);
    }
}

const m = new Mobil("Toyota");
m.jalan();
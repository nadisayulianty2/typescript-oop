class Kendaraan {
    merk: string;
    tahun: number;
    
    constructor(merk: string, tahun?: number) {
        this.merk = merk;
        this.tahun = tahun ?? 2024;
    }

    info(): void {
        console.log(`${this.merk} keluaran tahun ${this.tahun}`);
    }
}

const k1 = new Kendaraan("Toyota");
const k2 = new Kendaraan("Honda", 2020);

k1.info(); // Toyota keluaran tahun 2024
k2.info(); // Honda keluaran tahun 2020
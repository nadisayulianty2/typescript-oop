class Orang {
    nama: string;

    constructor(nama: string) {
        this.nama = nama;
    }

    perkenalan(): void {
        console.log(`Halo, saya ${this.nama}`);
    }
}

class Dosen extends Orang {
    mataKuliah: string;

    constructor(nama: string, mataKuliah: string) {
        super(nama); // memanggil constructor class Orang
        this.mataKuliah = mataKuliah;
    }

    mengajar(): void {
        console.log(`${this.nama} mengajar mata kuliah ${this.mataKuliah}`);
    }
}

const dosen1 = new Dosen("Bu Ani", "Pemrograman Web");
dosen1.perkenalan(); // Output: Halo, saya Bu Ani
dosen1.mengajar(); // Output: Bu Ani mengajar mata kuliah Pemrograman Web
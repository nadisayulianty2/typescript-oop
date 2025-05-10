class Mahasiswa2 {
    nama: string;
    nim: string;

    constructor(nama: string, nim: string) {
        this.nama = nama;
        this.nim = nim;
    }

    belajar (): void {
        console.log(`${this.nama} sedang belajar.`);
    }
}

const daftarMahasiswa: Mahasiswa2[] = [
    new Mahasiswa2("Rina", "10501"),
    new Mahasiswa2("Andi", "10502"),
    new Mahasiswa2("Siti", "10503"),
];

for (const m of daftarMahasiswa) {
    m.belajar();
}
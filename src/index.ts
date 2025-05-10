class Mahasiswa {
  nama: string;
  nim: string;
  
  constructor(nama: string, nim: string) {
    this.nama = nama;
    this.nim = nim;
  }

  belajar(): void {
    console.log(`${this.nama} dengan NIM ${this.nim} sedang belajar TypeScript`);
  }
}
const mhs1 = new Mahasiswa("Rina", "105011900001");
mhs1.belajar();
abstract class Hewan {
    nama: string;

    constructor(nama: string) {
        this.nama = nama;
    }

    abstract bersuara(): void;

    info(): void {
        console.log(`Ini adalah hewan bernama ${this.nama}`);
    }
}
class Kucing extends Hewan {
    bersuara(): void {
        console.log("Meong!");
    }
}

const hewan1 = new Kucing("Mimi");
hewan1.info(); // Output: Ini adalah hewan bernama Mimi
hewan1.bersuara(); // Output: Meong!
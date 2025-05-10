interface Hitung {
    (a: number, b: number): number;
}

const tambah: Hitung = (x, y) => x + y;
console.log(tambah(5, 3)); // Output: 8
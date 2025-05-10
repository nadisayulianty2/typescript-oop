class User {
    public nama: string;
    private password: string;
    protected email: string;

    constructor(nama: string, password: string, email: string) {
        this.nama = nama;
        this.password = password;
        this.email = email;
    }

    tampilkanInfo(): void {
        console.log(`Nama: ${this.nama}`);
        // console.log(this.password); // Boleh
        // console.log(this.email); // Boleh
    }
}
const u = new User("Esa", "rahasia123", "esa@mail.com");
console.log(u.nama); // Boleh
// console.log(u.password); // Error
// console.log(u.email); // Error
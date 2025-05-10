"use strict";
class AppConfig {
    // Private constructor: tidak bisa di-instantiate dari luar
    constructor() {
        this.appName = "My Application";
    }
    // Static method untuk akses instance tunggal
    static getInstance() {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig();
        }
        return AppConfig.instance;
    }
}
// Penggunaan
const configA = AppConfig.getInstance();
const configB = AppConfig.getInstance();
console.log(configA === configB); // true → hanya satu instance

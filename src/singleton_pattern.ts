class AppConfig {
    private static instance: AppConfig;
    public readonly appName: string;

    // Private constructor: tidak bisa di-instantiate dari luar
    private constructor() {
        this.appName = "My Application";
    }

    // Static method untuk akses instance tunggal
    public static getInstance(): AppConfig {
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
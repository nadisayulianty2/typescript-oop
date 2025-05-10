// 1. Interface umum
interface NotificationService {
    send(): void;
}

// 2. Implementasi konkret
class SMSService implements NotificationService {
    send() {
        console.log("Sending SMS...");
    }
}

class EmailService implements NotificationService {
    send() {
        console.log("Sending Email...");
    }
}

// 3. Factory
class NotificationFactory {
    static create(type: "sms" | "email"): NotificationService {
        if (type === "sms") {
            return new SMSService();
        } else if (type === "email") {
            return new EmailService();
        } else {
            throw new Error("Unknown notification type");
        }
    }
}

// 4. Penggunaan
const notif = NotificationFactory.create("email");
notif.send(); // Output: Sending Email...
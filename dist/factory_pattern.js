"use strict";
// 2. Implementasi konkret
class SMSService {
    send() {
        console.log("Sending SMS...");
    }
}
class EmailService {
    send() {
        console.log("Sending Email...");
    }
}
// 3. Factory
class NotificationFactory {
    static create(type) {
        if (type === "sms") {
            return new SMSService();
        }
        else if (type === "email") {
            return new EmailService();
        }
        else {
            throw new Error("Unknown notification type");
        }
    }
}
// 4. Penggunaan
const notif = NotificationFactory.create("email");
notif.send(); // Output: Sending Email...

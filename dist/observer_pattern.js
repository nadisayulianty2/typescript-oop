"use strict";
class NewsPublisher {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}
class EmailSubscriber {
    constructor(email) {
        this.email = email;
    }
    update(message) {
        console.log(` Email to ${this.email}: ${message}`);
    }
}
class SmsSubscriber {
    constructor(phone) {
        this.phone = phone;
    }
    update(message) {
        console.log(` SMS to ${this.phone}: ${message}`);
    }
}
const news = new NewsPublisher();
const user1 = new EmailSubscriber("user1@example.com");
const user2 = new SmsSubscriber("08123456789");
news.subscribe(user1);
news.subscribe(user2);
news.notify("Breaking News: TypeScript is awesome!");
// Output:
// Email to user1@example.com: Breaking News: TypeScript is awesome!
// SMS to 08123456789: Breaking News: TypeScript is awesome!

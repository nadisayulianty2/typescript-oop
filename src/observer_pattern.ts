interface Observer {
    update(message: string): void;
}

class NewsPublisher {
    private observers: Observer[] = [];

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }
}

class EmailSubscriber implements Observer {
    constructor(private email: string) {}
    update(message: string): void {
        console.log(` Email to ${this.email}: ${message}`);
    }
}

class SmsSubscriber implements Observer {
    constructor(private phone: string) {}
    update(message: string): void {
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
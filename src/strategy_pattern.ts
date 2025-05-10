interface ValidationStrategy {
    validate(input: string): boolean;
}

class EmailValidator implements ValidationStrategy {
    validate(input: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    }
}

class PhoneNumberValidator implements ValidationStrategy {
    validate(input: string): boolean {
        return /^08\d{8,11}$/.test(input);
    }
}

class FormField {
    private strategy: ValidationStrategy;

    constructor(strategy: ValidationStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: ValidationStrategy) {
        this.strategy = strategy;
    }
    
    validateInput(input: string): boolean {
        return this.strategy.validate(input);
    }
}

const field = new FormField(new EmailValidator());
console.log(field.validateInput("user@email.com")); // true
field.setStrategy(new PhoneNumberValidator());
console.log(field.validateInput("08123456789")); // true
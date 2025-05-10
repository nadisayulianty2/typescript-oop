"use strict";
class EmailValidator {
    validate(input) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    }
}
class PhoneNumberValidator {
    validate(input) {
        return /^08\d{8,11}$/.test(input);
    }
}
class FormField {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    validateInput(input) {
        return this.strategy.validate(input);
    }
}
const field = new FormField(new EmailValidator());
console.log(field.validateInput("user@email.com")); // true
field.setStrategy(new PhoneNumberValidator());
console.log(field.validateInput("08123456789")); // true

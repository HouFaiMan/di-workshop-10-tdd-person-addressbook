const _ = require('lodash');

class Person {

    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = _.capitalize(firstName);
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.emails = [];
        this.phoneNumbers = [];
        this.pets = [];
    }

    displayFullName() {
        return (`${this.firstName} ${this.lastName}`);
    }

    addEmail(email) {
        this.emails.push(email);
    }

    addPhoneNumber(number) {
        this.phoneNumbers.push(number);
    }

    addPet(pet) {
        this.pets.push(pet);
    }

    returnFormattedDetails() {
        return `${this.firstName} ${this.lastName}\n` +
            "----------\n" +
            `DOB: ${this.dateOfBirth}\n` +
            "\n" +
            "Email Addresses:\n" +
            `${this.emails[0]}\n` +
            `${this.emails[1]}\n` +
            "\n" +
            "Phone Numbers:\n" +
            `${this.phoneNumbers[0]}\n` +
            `${this.phoneNumbers[1]}\n`
    
    }
}

module.exports = Person;
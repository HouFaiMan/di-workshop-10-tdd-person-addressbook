const chai = require('chai');
const expect = chai.expect;
const Person = require('../models/person');
const Pet = require('../models/pet');

describe("Person", function() {

    it('should initialise an instance of Person', function() {
        let person = new Person("Alex", "Jones", "1st Jan 1990");

        expect(person.firstName).to.be.equal("Alex");
        expect(person.lastName).to.be.equal("Jones");
        expect(person.dateOfBirth).to.be.equal("1st Jan 1990");
        expect(person.emails).to.deep.equal([]);    
        expect(person.phoneNumbers).to.deep.equal([]);       
        expect(person.pets).to.deep.equal([]);        
    });

    it('should capitalise the first name', function() {
        let person = new Person("alex", "Jones", "1st Jan 1990");

        expect(person.firstName).to.be.equal("Alex");
    });

    it('should display the full name', function() {
        let person = new Person("Alex", "Jones", "1st Jan 1990");

        expect(person.displayFullName()).to.be.equal("Alex Jones");
    })

    it('should add emails to email property', function() {
        let person = new Person("Alex", "Jones", "1st Jan 1990");

        person.addEmail("AlexJones@outlook.com");
        person.addEmail("AlexJones@gmail.com");

        expect(person.emails).to.deep.equal([
            "AlexJones@outlook.com",
            "AlexJones@gmail.com"
        ])
    });

    it('should add a phone number to the number property', function() {
        let person = new Person("Alex", "Jones", "1st Jan 1990");

        person.addPhoneNumber(123456789);
        person.addPhoneNumber(987654321);

        expect(person.phoneNumbers).to.deep.equal([
            123456789,
            987654321
        ])
    });

    it('should return formatted details', function() {
        let person = new Person("Alex", "Jones", "1st Jan 1990");
        person.addEmail("AlexJones@outlook.com");
        person.addEmail("AlexJones@gmail.com");
        person.addPhoneNumber(123456789);
        person.addPhoneNumber(987654321);

        expect(person.returnFormattedDetails()).to.equal(
            `Alex Jones\n` +
            "----------\n" +
            `DOB: 1st Jan 1990\n` +
            "\n" +
            "Email Addresses:\n" +
            `AlexJones@outlook.com\n` +
            `AlexJones@gmail.com\n` +             
            "\n" +             
            "Phone Numbers:\n" +             
            `123456789\n` +             
            `987654321\n`             
        )
    });

    it('should add a pet to the person', function() {
        let person = new Person("Alex", "Jones", "1st Jan 1990");
        let dog = new Pet('Fluffy', 'dog');
        
        person.addPet(dog);

        expect(person.pets).to.deep.equal([
            {name: 'Fluffy', type: 'dog'}
        ])
    })
});
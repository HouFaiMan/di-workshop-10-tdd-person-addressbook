const chai = require('chai');
const fs = require('fs');
const expect = chai.expect;
const AddressBook = require('../models/addressBook');
const Person = require('../models/person');

describe("Address Book", function() {
    it('should initialise the address book with an empty array', function() {
        let addressBook = new AddressBook();

        expect(addressBook.entries).to.deep.equal([]);
    });

    it('can add people to the book', function() {
        let addressBook = new AddressBook();
        let person = new Person("Alex", "Jones", "1st Jan 1990");
        addressBook.addPerson(person);

        expect(addressBook.entries).to.deep.equal([
            {firstName: "Alex", lastName: "Jones", dateOfBirth: "1st Jan 1990", emails: [], phoneNumbers: [], pets: []}
        ]);
    });

    it('should return an array of people searched by first name', function() {
        let addressBook = new AddressBook();
        let person = new Person("Alex", "Jones", "1st Jan 1990");
        let person1 = new Person("Joe", "Bloggs", "1st Jan 1990");
        let person2 = new Person("Rob", "Cloggs", "1st Jan 1990");

        addressBook.addPerson(person);
        addressBook.addPerson(person1);
        addressBook.addPerson(person2);
        
        expect(addressBook.findByFirstName("Joe")).to.deep.equal([
            {firstName: "Joe", lastName: "Bloggs", dateOfBirth: "1st Jan 1990", emails: [], phoneNumbers: [], pets: []}
        ]);
    });

    it('should return an array of people searched by last name', function() {
        let addressBook = new AddressBook();
        let person = new Person("Alex", "Jones", "1st Jan 1990");
        let person1 = new Person("Joe", "Bloggs", "1st Jan 1990");
        let person2 = new Person("Rob", "Bloggs", "1st Jan 1990");

        addressBook.addPerson(person);
        addressBook.addPerson(person1);
        addressBook.addPerson(person2);
        
        expect(addressBook.findByLastName("Bloggs")).to.deep.equal([
            {firstName: "Joe", lastName: "Bloggs", dateOfBirth: "1st Jan 1990", emails: [], phoneNumbers: [], pets:[]},
            {firstName: "Rob", lastName: "Bloggs", dateOfBirth: "1st Jan 1990", emails: [], phoneNumbers: [], pets:[]}
        ]);
    });

    it('saving should generate an addressBook.json containing the entries of the people', function() {
        let addressBook = new AddressBook();
        let person = new Person("Alex", "Jones", "1st Jan 1990");
        let person1 = new Person("Joe", "Bloggs", "1st Jan 1990");
        let person2 = new Person("Rob", "Bloggs", "1st Jan 1990");

        addressBook.addPerson(person);
        addressBook.addPerson(person1);
        addressBook.addPerson(person2);
       
        addressBook.save();

        let content = fs.readFileSync('addressBook.json', 'utf-8');


        expect(JSON.parse(content)).to.deep.equal([
            {firstName: "Alex", lastName: "Jones", dateOfBirth: "1st Jan 1990", emails: [], phoneNumbers: [], pets:[]},
            {firstName: "Joe", lastName: "Bloggs", dateOfBirth: "1st Jan 1990", emails: [], phoneNumbers: [], pets:[]},
            {firstName: "Rob", lastName: "Bloggs", dateOfBirth: "1st Jan 1990", emails: [], phoneNumbers: [], pets:[]}
        ])
    });
});
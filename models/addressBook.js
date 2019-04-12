const fs = require('fs');    
    
class AddressBook {
    constructor() {
        this.entries = [];
    }

    addPerson(person) {
        this.entries.push(person);
    }

    findByFirstName(name) {
        return this.entries.filter((item) => item.firstName === name);
    }

    findByLastName(name) {
        return this.entries.filter((item) => item.lastName === name);
    }

    save() {
        fs.writeFileSync('addressBook.json', JSON.stringify(this.entries), 'utf-8');
    }
}

module.exports = AddressBook;
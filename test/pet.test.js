const chai = require('chai');
const expect = chai.expect;
const Pet = require('../models/pet');
const Person = require('../models/person');

describe("Pet", function() {
    it('should initialise a pet', function() {
        let cat = new Pet('Floof', 'cat');
        
        expect(cat).to.deep.equal({
            name: 'Floof',
            type: 'cat'
        })
    });

    it('should make a sound depending on the type of pet', function() {
        let cat = new Pet('Floof', 'cat');
        let dog = new Pet('Fluffy', 'dog');
        let goldfish = new Pet('Nemo', 'goldfish');

        expect(cat.sound()).to.equal('meow');
        expect(dog.sound()).to.equal('woof');
        expect(goldfish.sound()).to.equal('blub');
    });
});
class Pet {

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    sound() {
        switch (this.type) {
            case 'cat':
                return 'meow'
            case 'dog':
                return 'woof'
            case 'goldfish':
                return 'blub'
        }
    }
}

module.exports = Pet;
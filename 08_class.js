export default class NumberGenerator {
    constructor(limit) {
        this.limit = limit;
    }

    // generator method with *-symbol
    *generateNumbers() {
        for (let i = 1; i <= this.limit; i++) {
            yield i;
        }
    }
}

// usage of NumberGenerator class
const generator = new NumberGenerator(3);

// usage of generator method
const gen = generator.generateNumbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

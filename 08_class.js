class NumberGenerator {
    constructor(limit) {
        this.limit = limit;
    }

    // Generator-Methode mit dem *-Symbol
    *generateNumbers() {
        for (let i = 1; i <= this.limit; i++) {
            yield i;
        }
    }
}

const generator = new NumberGenerator(3);

// Verwenden der Generator-Methode
const gen = generator.generateNumbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

export default class NumberGenerator {
    constructor(limit) {
        this.limit = limit;
    }

    // Async Generator Methode
    async *generateAsyncNumbers() {
        for (let i = 1; i <= this.limit; i++) {
            // Simuliere eine asynchrone Operation
            await new Promise(resolve => setTimeout(resolve, 1000));
            yield i;
        }
    }
}

const generator = new NumberGenerator(5);

// Verwenden der Async Generator-Methode
(async () => {
    const asyncGen = generator.generateAsyncNumbers();
    for await (let num of asyncGen) {
        console.log(num); // Gibt alle Sekunden eine Zahl aus: 1, 2, 3, 4, 5
    }
})();

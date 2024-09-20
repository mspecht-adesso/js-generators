export default class NumberGenerator {
    constructor(limit) {
        this.limit = limit;
    }

    // async generator method with *-symbol
    async *generateAsyncNumbers() {
        for (let i = 1; i <= this.limit; i++) {
            // simulates an asynchronous operation
            await new Promise(resolve => setTimeout(resolve, 1000));
            yield i;
        }
    }
}

// usage of NumberGenerator class
const generator = new NumberGenerator(5);

// usage of async generator method
(async () => {
    const asyncGen = generator.generateAsyncNumbers();
    for await (let num of asyncGen) {
        console.log(num); // Gibt alle Sekunden eine Zahl aus: 1, 2, 3, 4, 5
    }
})();

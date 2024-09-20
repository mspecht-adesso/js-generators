// generator function with *-symbol
export default function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// usage of generator function
const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

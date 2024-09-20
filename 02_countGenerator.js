// generator function with *-symbol
export default function* countGenerator() {
    let count = 0;
    
    while (count < 3) {
        yield count++;
    }
}

// usage of generator function
const gen = countGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
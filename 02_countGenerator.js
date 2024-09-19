function* countGenerator() {
    let count = 0;
    
    while (count < 3) {
        yield count++;
    }
}

const gen = countGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
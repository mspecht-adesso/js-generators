// generator function with *-symbol
export default function* fibonacci() {
    let [prev, current] = [0, 1];

    yield 0;
    
    while (true) {
        yield current;
        [prev, current] = [current, prev + current];
    }
}

// usage of generator function
const fib = fibonacci();

for (let i=1; i<=8; i++) {
    console.log(fib.next().value);
}

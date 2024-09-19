function* fibonacci() {
    let [prev, current] = [0, 1];

    yield 0;
    
    while (true) {
        yield current;
        [prev, current] = [current, prev + current];
    }
}

const fib = fibonacci();

for (let i=1; i<=8; i++) {
    console.log(fib.next().value);
}

export default function* fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      yield (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
    }
  }
  
  for (let val of fizzBuzz(15)) {
    console.log(val);
  }
    
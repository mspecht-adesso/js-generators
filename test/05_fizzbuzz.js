import { expect } from 'chai';
import fizzBuzz from '../05_fizzBuzz.js';

describe('fizzBuzz', () => {
  it('should generate correct FizzBuzz sequence for n = 15', () => {
    const expectedOutput = [
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'
    ];

    const gen = fizzBuzz(15);
    const result = Array.from(gen); // Convert the generator output into an array

    expect(result).to.deep.equal(expectedOutput);
  });

  it('should generate correct FizzBuzz sequence for n = 5', () => {
    const expectedOutput = [
      1, 2, 'Fizz', 4, 'Buzz'
    ];

    const gen = fizzBuzz(5);
    const result = Array.from(gen);

    expect(result).to.deep.equal(expectedOutput);
  });

  it('should return an empty sequence for n = 0', () => {
    const gen = fizzBuzz(0);
    const result = Array.from(gen);

    expect(result).to.deep.equal([]);
  });

  it('should handle a case where no Fizz or Buzz values appear', () => {
    const expectedOutput = [1, 2];

    const gen = fizzBuzz(2);
    const result = Array.from(gen);

    expect(result).to.deep.equal(expectedOutput);
  });
});

import { expect } from 'chai';
import fibonacci from '../04_fibonacci.js';

describe('fibonacci', () => {
  let gen;

  beforeEach(() => {
    gen = fibonacci();
  });

  it('should generate the first 8 Fibonacci numbers', () => {
    const expectedValues = [0, 1, 1, 2, 3, 5, 8, 13];
    expectedValues.forEach(expected => {
      const { value } = gen.next();
      expect(value).to.equal(expected);
    });
  });

  it('should continue generating Fibonacci numbers beyond 8 iterations', () => {
    // Skip the first 8 values
    for (let i = 0; i < 8; i++) {
      gen.next();
    }

    // Test the 9th and 10th Fibonacci numbers
    expect(gen.next().value).to.equal(21); // 9th Fibonacci number
    expect(gen.next().value).to.equal(34); // 10th Fibonacci number
  });
});

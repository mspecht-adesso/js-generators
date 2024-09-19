import { expect } from 'chai';
import countGenerator from '../02_countGenerator.js';

describe('countGenerator', () => {
  let gen;

  beforeEach(() => {
    gen = countGenerator();
  });

  it('should return 0 on the first call', () => {
    const result = gen.next();
    expect(result).to.deep.equal({ value: 0, done: false });
  });

  it('should return 1 on the second call', () => {
    gen.next(); // Skip the first call
    const result = gen.next();
    expect(result).to.deep.equal({ value: 1, done: false });
  });

  it('should return 2 on the third call', () => {
    gen.next(); // Skip the first call
    gen.next(); // Skip the second call
    const result = gen.next();
    expect(result).to.deep.equal({ value: 2, done: false });
  });

  it('should return undefined after third call with done: true', () => {
    gen.next(); // Skip the first call
    gen.next(); // Skip the second call
    gen.next(); // Skip the third call
    const result = gen.next();
    expect(result).to.deep.equal({ value: undefined, done: true });
  });
});

import { expect } from 'chai';
import NumberGenerator from '../08_class.js';

describe('NumberGenerator', () => {
  it('should generate numbers from 1 to 3 when limit is 3', () => {
    const generator = new NumberGenerator(3);
    const gen = generator.generateNumbers();

    expect(gen.next().value).to.equal(1);
    expect(gen.next().value).to.equal(2);
    expect(gen.next().value).to.equal(3);
    expect(gen.next().done).to.equal(true); // Ensure that the generator is done after reaching the limit
  });

  it('should generate numbers from 1 to 5 when limit is 5', () => {
    const generator = new NumberGenerator(5);
    const gen = generator.generateNumbers();

    const expectedValues = [1, 2, 3, 4, 5];
    for (const expected of expectedValues) {
      const { value, done } = gen.next();
      expect(value).to.equal(expected);
      expect(done).to.equal(false);
    }
    
    // Check that the generator is done after yielding the last value
    expect(gen.next().done).to.equal(true);
  });

  it('should immediately be done if limit is 0', () => {
    const generator = new NumberGenerator(0);
    const gen = generator.generateNumbers();

    expect(gen.next().done).to.equal(true); // No numbers should be generated, generator should be done immediately
  });
});

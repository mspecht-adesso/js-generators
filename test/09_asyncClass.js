import { expect } from 'chai';
import NumberGenerator from '../09_asyncClass.js';

describe('NumberGenerator (async)', function() {
  // Set a higher timeout because we are now using real timeouts (e.g., 10 seconds)
  this.timeout(15000);

  it('should asynchronously generate numbers from 1 to 3', async () => {
    const generator = new NumberGenerator(3);
    const asyncGen = generator.generateAsyncNumbers();

    const generatedNumbers = [];

    for await (let num of asyncGen) {
      generatedNumbers.push(num);
    }

    // Verify that the numbers generated are as expected
    expect(generatedNumbers).to.deep.equal([1, 2, 3]);
  });

  it('should asynchronously generate numbers from 1 to 5', async () => {
    const generator = new NumberGenerator(5);
    const asyncGen = generator.generateAsyncNumbers();

    const generatedNumbers = [];

    for await (let num of asyncGen) {
      generatedNumbers.push(num);
    }

    // Verify that the numbers generated are as expected
    expect(generatedNumbers).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should not generate any numbers if limit is 0', async () => {
    const generator = new NumberGenerator(0);
    const asyncGen = generator.generateAsyncNumbers();

    const generatedNumbers = [];

    for await (let num of asyncGen) {
      generatedNumbers.push(num);
    }

    // Verify that no numbers are generated
    expect(generatedNumbers).to.deep.equal([]);
  });
});

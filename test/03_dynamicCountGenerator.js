import { expect } from 'chai';
import dynamicCountGenerator from '../03_dynamicCountGenerator.js';

describe('dynamicCountGenerator', () => {
  it('should generate values from 1 to 5 when val is 5', () => {
    const gen = dynamicCountGenerator(5);
    expect(gen.next()).to.deep.equal({ value: 1, done: false });
    expect(gen.next()).to.deep.equal({ value: 2, done: false });
    expect(gen.next()).to.deep.equal({ value: 3, done: false });
    expect(gen.next()).to.deep.equal({ value: 4, done: false });
    expect(gen.next()).to.deep.equal({ value: 5, done: false });
    expect(gen.next()).to.deep.equal({ value: undefined, done: true });
  });

  it('should generate values from 1 to 3 when val is 3', () => {
    const gen = dynamicCountGenerator(3);
    expect(gen.next()).to.deep.equal({ value: 1, done: false });
    expect(gen.next()).to.deep.equal({ value: 2, done: false });
    expect(gen.next()).to.deep.equal({ value: 3, done: false });
    expect(gen.next()).to.deep.equal({ value: undefined, done: true });
  });

  it('should return done: true immediately when val is 0', () => {
    const gen = dynamicCountGenerator(0);
    expect(gen.next()).to.deep.equal({ value: undefined, done: true });
  });

  it('should generate a single value when val is 1', () => {
    const gen = dynamicCountGenerator(1);
    expect(gen.next()).to.deep.equal({ value: 1, done: false });
    expect(gen.next()).to.deep.equal({ value: undefined, done: true });
  });
});

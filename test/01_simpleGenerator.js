import { expect } from 'chai';
import simpleGenerator from '../01_simpleGenerator.js';

describe('simpleGenerator function', () => {
    it('should yield values 1, 2, and 3 in sequence', () => {
        const gen = simpleGenerator();

        let result = gen.next();
        expect(result).to.deep.equal({ value: 1, done: false });

        result = gen.next();
        expect(result).to.deep.equal({ value: 2, done: false });

        result = gen.next();
        expect(result).to.deep.equal({ value: 3, done: false });

        result = gen.next();
        expect(result).to.deep.equal({ value: undefined, done: true });
    });
});

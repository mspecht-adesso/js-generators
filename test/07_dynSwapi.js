import { expect } from 'chai';
import sinon from 'sinon';
import getHomeworld from '../07_dynSwapi.js';

describe('getHomeworld', () => {
  let fetchStub;

  beforeEach(() => {
    // Create a stub for the global fetch method
    fetchStub = sinon.stub(global, 'fetch');
  });

  afterEach(() => {
    // Restore the original fetch method after each test
    fetchStub.restore();
  });

  it('should fetch person details and their homeworld for id = 1', async () => {
    // Mock response for person with id 1
    const mockPersonResponse = {
      name: 'Luke Skywalker',
      homeworld: 'https://swapi.dev/api/planets/1/'
    };

    // Mock response for homeworld of the person
    const mockHomeworldResponse = {
      name: 'Tatooine'
    };

    // Stub the fetch calls
    fetchStub.withArgs('https://swapi.dev/api/people/1/').resolves({
      json: () => Promise.resolve(mockPersonResponse)
    });

    fetchStub.withArgs('https://swapi.dev/api/planets/1/').resolves({
      json: () => Promise.resolve(mockHomeworldResponse)
    });

    // Call the generator function and get the result
    const homeworldGen = getHomeworld(1);
    const { value: data } = await homeworldGen.next();

    // Assertions to check if the returned data is correct
    expect(data.person.name).to.equal('Luke Skywalker');
    expect(data.homeworld.name).to.equal('Tatooine');
  });

  it('should fetch person details and their homeworld for id = 3', async () => {
    // Mock response for person with id 3
    const mockPersonResponse = {
      name: 'R2-D2',
      homeworld: 'https://swapi.dev/api/planets/8/'
    };

    // Mock response for homeworld of the person
    const mockHomeworldResponse = {
      name: 'Naboo'
    };

    // Stub the fetch calls
    fetchStub.withArgs('https://swapi.dev/api/people/3/').resolves({
      json: () => Promise.resolve(mockPersonResponse)
    });

    fetchStub.withArgs('https://swapi.dev/api/planets/8/').resolves({
      json: () => Promise.resolve(mockHomeworldResponse)
    });

    // Call the generator function and get the result
    const homeworldGen = getHomeworld(3);
    const { value: data } = await homeworldGen.next();

    // Assertions to check if the returned data is correct
    expect(data.person.name).to.equal('R2-D2');
    expect(data.homeworld.name).to.equal('Naboo');
  });
});

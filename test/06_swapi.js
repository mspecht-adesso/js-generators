import { expect } from 'chai';
import sinon from 'sinon';
import getPersonHomeworld from '../06_swapi.js';

describe('getPersonHomeworld', () => {
  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch');
  });

  afterEach(() => {
    fetchStub.restore();
  });

  it('should fetch person details and their homeworld', async () => {
    // Mock the response for the person
    const mockPersonResponse = {
      name: 'Luke Skywalker',
      homeworld: 'https://swapi.dev/api/planets/1/'
    };

    // Mock the response for the homeworld
    const mockHomeworldResponse = {
      name: 'Tatooine'
    };

    // First fetch call returns the person
    fetchStub.withArgs('https://swapi.dev/api/people/3/').resolves({
      json: () => Promise.resolve(mockPersonResponse)
    });

    // Second fetch call returns the homeworld
    fetchStub.withArgs('https://swapi.dev/api/planets/1/').resolves({
      json: () => Promise.resolve(mockHomeworldResponse)
    });

    const getHomeworld = getPersonHomeworld(3);

    const { value: data } = await getHomeworld.next();

    expect(data.person.name).to.equal('Luke Skywalker');
    expect(data.homeworld.name).to.equal('Tatooine');
  });
});

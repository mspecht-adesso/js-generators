// async generator function with *-symbol
export default async function* getPersonHomeworld(id) {
    const person = await fetch(`https://swapi.dev/api/people/${id}/`).then((result) => result.json());
    const homeworld = await fetch(person.homeworld).then((result) => result.json());

    yield {person, homeworld};
}

// usage of async generator function
(async () => {
    const getHomeworld = getPersonHomeworld(3);

    // Destructure `value` directly from the awaited result
    const { value: data } = await getHomeworld.next();

    console.log('name:', data.person.name);
    console.log('home:', data.homeworld.name);
})();

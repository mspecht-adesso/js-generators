export default async function* getHomeworld(id) {
    const person = await fetch(`https://swapi.dev/api/people/${id}/`).then((result) => result.json());
    const homeworld = await fetch(person.homeworld).then((result) => result.json());

    yield { person, homeworld };
}

(async () => {
    for (let id = 1; id <= 5; id++) {
        const homeworld = getHomeworld(id);
        const { value: data } = await homeworld.next();
    
        console.log(`${data.person.name} (${data.homeworld.name})`);
    }
})();

export default class SwapiService {


    async getResource(url) {

        const res = await fetch(`https://swapi.co/api${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `,received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this.transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}`);
    }

    extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return  item.url.match(idRegExp)[1];
    }

    transformPlanet(planet) {

        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            populationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    transformPerson(person) {

        return {
            id: person.id,
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color

        }
    }

    transformStarship(starship) {

        return {
            id: starship.id,
            name: starship.id,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costIncredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity


        }
    }
}


// const swapi = new StarWarsServise();
//
// swapi.getAllPeople()
//     .then((people) => {
//         people.forEach((item) => {
//             console.log(item.max_atmosphering_speed)
//         });
//     });
//
//
// swapi.getStarship(5)
//     .then((starships) => {
//         console.log(starships.passengers)
//     });
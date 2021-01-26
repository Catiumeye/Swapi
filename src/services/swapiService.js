export default class SwapiService {
    _apiBase = 'https://swapi.py4e.com/api/';

    async getRes(url) {
        const resp = await fetch(`${this._apiBase}${url}`)
        if(!resp.ok) {
            throw new Error('тупа ошибка')
        }
        return await resp.json()
    }
    getAllPeople = async () => {
        const res = await this.getRes(`people/`);
        return res.results.map(item => this._transformPerson(item));
    }
    async getPerson(id) {
        const res = await this.getRes(`people/${id}`);
        return this._transformPerson(res);
    }
    async getPlanet(id) {
        const planet = await this.getRes(`planets/${id}`);
        return this._transformPlanet(planet);
    }
    getAllPlanets = async () => {
        const res = await this.getRes(`planets/`);
        return res.results;
    }
    getAllStarships = async () => {
        const res = await this.getRes(`starships/`);
        return res.results.map((i) => this._transformStarship(i));
    }
    async getStarship(id) {
        const res = await this.getRes(`starships/${id}`);
        return this._transformStarship(res);
    }
    _extractId(unit) {
        const idRegExp = /\/([0-9]*)\/$/;
        return unit.url.match(idRegExp)[1];
    }
    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }
    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
}
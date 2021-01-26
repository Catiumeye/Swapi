import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from "../../services/swapiService";
import SpinnerLoading from "../spinner-loading/spinner-loading";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {
            id: null,
            planetName: null,
            population: null,
            rotationPeriod: null,
            diameter: null
        }
    }
    componentDidMount() {
        this.updatePlanet()
        this.everyUpdatePlanet();
    }
    componentWillUnmount() {
        clearInterval(this.myInterval);
    }
    updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
            .then(planet => this.onPlanetLoaded(planet))
            .catch(() => this.onError())
    }
    onPlanetLoaded(planet) {
        this.setState({planet})
    }
    onError() {
        console.log('error')
    }
    everyUpdatePlanet() {
        this.myInterval = setInterval(() => this.updatePlanet(), 5000)
    }

    render() {
        const {id, name, population, rotationPeriod, diameter} = this.state.planet;
        return(
            <div className='random-planet'>
                <div className='random-planet__image'>{id ? <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/> : <SpinnerLoading />}</div>
                <div className='detail-description'>
                    <h2 className='detail-description__header'>{name}</h2>
                    <p>Population: {population}</p>
                    <p>Rotation period: {rotationPeriod}</p>
                    <p>Diameter: {diameter}</p>
                </div>
            </div>
        )
    }
}
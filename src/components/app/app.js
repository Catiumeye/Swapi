import React, { Component } from 'react';
import SwapiService from "../../services/swapiService";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import 'normalize.css';
import './app.css';

 class App extends Component {
     swapiService = new SwapiService();
     state = {
         rPlanet: true,
     }

     onToggleRandomPlanet = (e) => {
         this.setState(({rPlanet}) => {
             return {
                 rPlanet: !rPlanet
             }
         })
     }

     render() {
         const random = this.state.rPlanet ? <RandomPlanet /> : null;
        return (
            <div className='container'>
                <Header />
                {random}
                <button onClick={this.onToggleRandomPlanet}>Toggle random planet</button>
                <PeoplePage getData={this.swapiService.getAllPeople}
                            />
                <PeoplePage getData={this.swapiService.getAllStarships}/>
                {/*<PeoplePage getData={this.swapiService.getAllPlanets}/>*/}
            </div>
        )
    }
 }

export default App;
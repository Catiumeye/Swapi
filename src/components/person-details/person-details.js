import React, { Component } from 'react';
import SwapiService from "../../services/swapiService";
import SpinnerLoading from "../spinner-loading/spinner-loading";
import './person-details.css';

export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null
    }

    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }
    componentWillUnmount() {
        this.setState({item: null})
    }

    updatePerson = () => {
        const { personId } = this.props;
        if(!personId) {
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {
        if (!this.state.item) {
            return <SpinnerLoading />
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.item;
        return (
            <div className='list-details'>
                <div className='list-details__img'>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="empty image"/>
                </div>
                <div className='detail-description'>
                    <h2 className='detail-description__header'>{name}</h2>
                    <p>Gender: {gender}</p>
                    <p>Birth year: {birthYear}</p>
                    <p>Eye color: {eyeColor}</p>
                </div>
            </div>
        );
    }
}
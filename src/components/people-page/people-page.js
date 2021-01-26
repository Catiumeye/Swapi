import React, { Component } from 'react';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

export default class PeoplePage extends Component {
    state = {
        selectedItem: null,
        error: false
    }

    onPersonSelected = (selectedItem) => {
        this.setState({selectedItem})
    }
    onBtnClick = () => {
        this.setState({error: true})
        this.props.zaVDV = 54;
    }
    render() {
        if (this.state.error) {
            return <div>вы допустили ошибку</div>
        }
        return (
            <div className='d-flex'>
                <ItemList onPersonSelected={this.onPersonSelected}
                          getData={this.props.getData}/>
                <button onClick={this.onBtnClick}>допустить ошибку</button>
                <PersonDetails personId={this.state.selectedItem}/>
            </div>
        );
    }
}
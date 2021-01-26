import React, { Component } from "react";
import './item-list.css';
import SwapiService from "../../services/swapiService";
import RenderItemList from "../renderItemList/render-item-list";

export default class ItemList extends Component {
    swapiService = new SwapiService();
    state = {
        itemList : null
    }
    componentDidMount() {
        const { getData } = this.props;
        this.getPeopleList(getData);
    }
    getPeopleList = (getData) => {
        getData()
            .then(e => {
                this.setState(() =>{
                    return {itemList: e}
                })

            })
    }

    render() {

        return (
            <ul className='item-list'>
                <RenderItemList peopleList={this.state.itemList}
                                onPersonSelected={this.props.onPersonSelected}/>
            </ul>
        )
    }
}
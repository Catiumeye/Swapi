import React, { Component } from "react";
import './render-item-list.css';
import SpinnerLoading from "../spinner-loading/spinner-loading";

export default class RenderItemList extends Component {
    times = 0;
    state = {
        loading : true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.peopleList && this.times < 1) {
            this.times = 1;
            this.setState(() => {
                return {loading: false}
            })
        }
    }

    itemListRender = () => {
        const { peopleList, onPersonSelected } = this.props;
        return peopleList.map(({id, name}) => {
            return(
                <li className='item-list__item' key={id} onClick={() => onPersonSelected(id)}><span>{name}</span></li>
            )
        })
    }


    render() {
        const { peopleList } = this.props;
        const {loading} = this.state;


        return (
            <React.Fragment>
                {loading ? <SpinnerLoading /> : this.itemListRender()}
            </React.Fragment>
        )
    }
}
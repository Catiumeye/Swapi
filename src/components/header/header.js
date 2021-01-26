import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    listLabel = [
        {text: 'People', elemLink: '/people'},
        {text: 'Planets', elemLink: '/planets'},
        {text: 'Starships', elemLink: '/starships'}
    ]
    render() {
        const listItem = this.listLabel.map(({text, elemLink}) => {
            return <li key={text} className='header-list'><a href={elemLink}>{text}</a></li>
        })
        return(
            <header className='header'>
                <div className='header-icon'>Star DB</div>
                    <ul className='header-tabs'>
                        {listItem}
                    </ul>
            </header>
        )
    }
}
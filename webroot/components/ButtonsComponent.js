import React from 'react';
import IconSearch from '../icons/search.svg';
import Logo from '../icons/logo.svg';

export default function ButtonsComponent(props) {
    return (
            <header>
                <h1><a href="./"><img src={Logo} alt="" /></a></h1>
                <ul className="buttons-container">
                    <li>
                        <button type="button" className="city" onClick={props.handleClick}>Helenski, Finland</button>
                    </li>
                    <li>
                        <button type="button" className="guest" onClick={props.handleClick}>Add guests</button>
                    </li>
                    <li>
                        <button onClick={props.handleClick} type="button" className="search">
                            <img src={IconSearch} alt="" />
                        </button>
                    </li>
                </ul>
            </header>
    )
}
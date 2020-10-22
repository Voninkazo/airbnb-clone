import React from 'react';
import IconSearch from '../icons/search.svg';

export default function ButtonsComponent(props) {
    return (
        <div className="buttons-container">
            <button type="button" onClick={props.handleClick}>Location</button>
            <button type="button" onClick={props.handleClick}>Add guests</button>
            <button onClick={props.handleClick} type="button" className="search">
                <img src={IconSearch} alt="" />
            </button>
        </div>
    )
}
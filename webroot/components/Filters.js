import React from 'react';

export default function Filters(props) {
    return (
        <form className="modal-form">
            <select name="select-city" onChange={props.handleChange}>
            {
                props.allStay.map((option) => (
                <option key={option.title} value={
                `${option.city}`}>{`${option.city}, ${option.country}`}
                </option>
                ))
                }
            </select>
                <button className="input-button" type="button" onClick={props.handleFilterGuest}>{props.allGuests} Guests</button>
                <small>Adults: {props.countAdult}</small>
                <button type="button" onClick={props.incrementAdult}>+</button>
                <button type="button" onClick={props.decrementAdult}>-</button>
                <small>Child: {props.countChildren}</small>
                <button type="button" onClick={props.incrementChildren}>+</button>
                <button type="button" onClick={props.decrementChildren}>-</button>
        </form>
    )
}
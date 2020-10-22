import React from 'react';
import IconClose from '../icons/close.svg';
import IconSearch from '../icons/search.svg';

export default function ModalForm(props) {
    return(
        <div className="popup">
                <div className="popup-content">
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
                        <div className="increment-container">
                            <small>Adults: {props.countAdult}</small>
                            <button type="button" onClick={props.incrementAdult}>+</button>
                            <button type="button" onClick={props.decrementAdult}>-</button>
                        <br/>
                            <small>Child: {props.countChildren}</small>
                            <button type="button" onClick={props.incrementChildren}>+</button>
                            <button type="button" onClick={props.decrementChildren}>-</button>
                        </div>

                        <button type="button" className="search" onClick={props.handleChange} value="Search">
                            <img src={IconSearch} alt="" />
                        </button>
                        <p className="close-icon" onClick={props.handleClick}>
                            <img src={IconClose} alt=""/>
                        </p>
                    </form>
                </div>
            </div>
    )
}
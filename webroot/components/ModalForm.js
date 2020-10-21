import React from 'react';
import IconClose from '../icons/close.svg';
import IconSearch from '../icons/search.svg';

export default function ModalForm(props) {
    // console.log(props.handleChange);
    // console.log(props)
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
                        <label>
                        <input type="text" name="guests" placeholder="Add guests" />
                        </label>
                        <button type="button" className="search" value="Search">
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
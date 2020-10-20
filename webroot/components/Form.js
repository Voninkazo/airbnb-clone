import React from 'react';
import IconSearch from '../icons/search.svg';

export default function Form() {
    return(
        <form className="form">
            <label>
                <input type="text" name="city" placeholder="Location" />
            </label>
            <label>
            <input type="text" name="guests" placeholder="Add guests" />
            </label>
            <button type="button" className="search">
                <img src={IconSearch} alt="" />
            </button>
        </form>
    )
}
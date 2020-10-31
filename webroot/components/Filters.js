import React, { useState } from 'react';
import LocationImg from '../icons/location.png'

export default function Filters(props) {
    const [openList,  setOpenList] = useState(false);
    function handleOpenList() {
        setOpenList(!openList);
    }

    const [openIncrement, setOpenIncrement] = useState(false);

    function handleOpenIncrement() {
        setOpenIncrement(!openIncrement);
    }

    return (
        <form className="modal-form">
            <div className="form-container">
                <label htmlFor="stay">Location</label>
                <input 
                type="text" 
                name="stay" 
                placeholder="Location"
                value={props.input}
                onChange={props.handleChange}
                onClick={handleOpenList}/>
                <div>
                    {
                        openList && 
                        <ul className="location-container">
                            <li className="location">
                                <img src={LocationImg} alt=""/>
                                <button className="btn-item" type="button" value="Helsinki" onClick={props.handleChange}>Helsinki, Finland</button>
                            </li>
                            <li onClick={props.handleChange} className="location">
                                <img src={LocationImg} alt=""/>
                                <button className="btn-item" type="button" value="Oulu"  onClick={props.handleChange}>Oulu, Finland</button>
                            </li>
                            <li onClick={props.handleChange} className="location">
                                <img src={LocationImg} alt=""/>
                                <button className="btn-item" type="button" value="Turku"  onClick={props.handleChange}>Turku, Finland</button>
                            </li>
                            <li onClick={props.handleChange} className="location">
                                <img src={LocationImg} alt=""/>
                                <button className="btn-item" type="button" value="Vaasa" onClick={props.handleChange}>Vaasa, Finland</button>
                            </li>
                    </ul>
                    }
                </div>
            </div>
            <div className="form-container">
                <label htmlFor="guest"> Guests</label>
                <input type="text" name="guest" id="guests" placeholder="guests" onClick={handleOpenIncrement}/>
                <div>
                    {
                        openIncrement && 
                        <div>
                            <ul className="increment-container">
                                <li>
                                    <p className="specification">Adults</p>
                                    <small className="ages">Ages 13 or above:</small>
                                </li>
                                <li>
                                    <button type="button" onClick={props.incrementAdult}>+</button>
                                    <span className="adults-num">{props.countAdult}</span>
                                    <button className="minus-btn" type="button" onClick={props.decrementAdult}>-</button>
                                </li>
                            </ul>
                            <ul className="increment-container">
                                <li>
                                    <p>Children</p>
                                    <small>Ages 2-12</small>
                                </li> 
                                <li>
                                    <button type="button" onClick={props.incrementChildren}>+</button>
                                    <span className="child-num">{props.countChildren}</span>
                                    <button className="minus-btn" type="button" onClick={props.decrementChildren}>-</button>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <button type="button" value="Search" className="search filter-search" onClick={props.handleClick}>
                    Search
            </button>
        </form>
    )
}
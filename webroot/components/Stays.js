import React from 'react';
import IconStar from '../icons/star.svg';

export default function Satys({stay, allStays, filteredByGuests}) {

    return (
        <div className="stay_container"> 
            <div>
                <img style={{objectFit: 'contain'}} src={stay.photo} alt={stay.title}/>
            </div>
            <ul className="list_container">
                {stay.superHost ? <li className="super_host">SUPERHOST</li> : ''}
                <li>{stay.type}</li>
                <li>{stay.beds} beds</li>
                <li className="rating">
                    <img style={{width:"15px", height:"15px"}} src={IconStar} alt=""/>
                    <span>{stay.rating}</span>
                </li>
            </ul>
            <p className="stay-title">{stay.title}</p>
        </div>
    )
}
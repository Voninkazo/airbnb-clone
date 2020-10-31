import React from 'react';
import IconStar from '../icons/star.svg';

export default function Satys({stay}) {
    return (
        <div>
            <img src={stay.photo} alt={stay.title}/>
            <ul className="list_container">
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
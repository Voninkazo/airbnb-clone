import React from 'react';
import IconStar from '../icons/star.svg';

export default function Satys({stay}) {
    return (
        <div>
            <img src={stay.photo} alt={stay.title}/>
            <ul className="list_conatiner">
                <li>{stay.type}</li>
                <li>{stay.beds} beds</li>
                <li className="rating">
                    <span>{stay.rating}</span>
                </li>
            </ul>
            <p className="stay-title">{stay.title}</p>
        </div>
    )
}
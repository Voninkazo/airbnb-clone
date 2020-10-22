import React from 'react';

export default function Satys({stay}) {
    return (
        <div>
            <img src={stay.photo} alt={stay.title}/>
            <ul className="list_conatiner">
                <li>{stay.type}</li>
                <li>{stay.beds} beds</li>
                <li>{stay.rating}</li>
                {/* <li>{stay.maxGuests}</li> */}
            </ul>
            <p className="stay-title">{stay.title}</p>
        </div>
    )
}
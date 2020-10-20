import React, { useState } from 'react';
import stays from './stays.json';
import Stays from './Stays';
import IconSearch from '../icons/search.svg';
import ModalForm from './ModalForm';

export default function Airbnb() {
    const allStays = stays;
    console.log(allStays);
    const [isOpen, setIsOpen] = useState(false);

    for(let i = 0;i < allStays.length; i++) {
       allStays[i].id = i;
    }

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return(
            <div>
                {isOpen &&
                <ModalForm handleClick={handleClick}/>
                }
                <form className="form">
                    <label>
                        <input type="text" name="city" placeholder="Location" />
                    </label>
                    <label>
                    <input type="text" name="guests" placeholder="Add guests" />
                    </label>
                    <button onClick={handleClick} type="button" className="search">
                        <img src={IconSearch} alt="" />
                    </button>
                </form>
                <div  className="stays">
                {
                    allStays.map(stay => {
                        return (
                            <Stays key={stay.id} stay={stay} {...allStays}/>
                        )
                    })
                }
                </div>
            </div>
    )
}
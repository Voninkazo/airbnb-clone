import React, { useState } from 'react';
import stays from './stays.json';
import Stays from './Stays';
import IconSearch from '../icons/search.svg';
import ModalForm from './ModalForm';

export default function Airbnb() {
    const allStays = stays;
    const [isOpen, setIsOpen] = useState(false);

    for(let i = 0;i < allStays.length; i++) {
       allStays[i].id = i;
    }

    function handleClick() {
        setIsOpen(!isOpen);
    }

    const [filteredState, setFilteredState] = useState(allStays);
    function handleChange (e) {
        setFilteredState(allStays.filter(
        stays => stays.city.toLowerCase() === e.target.value.toLowerCase()
        ))
        // setIsOpen(!isOpen);
        // console.log(filteredState);
        console.log(filteredState)
    }

    const [filterByGuests, setFilterByGuest] = useState(allStays);
    

    function handleFilterGuest(e) {
        console.log(e.target.value);
        setFilterByGuest(filteredState.filter(
            guest => guest.maxGuests >= e.target.value
        ))
    }

    const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(prevCount => prevCount + 1);
    console.log(count);
  }


    return(
            <div>
                {isOpen &&
                <ModalForm 
                handleIncrement={handleIncrement}
                handleClick={handleClick} 
                handleChange={handleChange}
                handleFilterGuest={handleFilterGuest}
                allStay={allStays}/>
                }
                <div className="buttons-container">
                   <button type="button" onClick={handleClick}>Location</button>
                   <button type="button" onClick={handleClick}>Add guests</button>
                    <button onClick={handleClick} type="button" className="search">
                        <img src={IconSearch} alt="" />
                    </button>
                </div>
                <div  className="stays">
                {
                    filterByGuests.map(stay => {
                        return (
                            <Stays key={stay.id} stay={stay}/>
                        )
                    })
                }
                </div>
            </div>
    )
}
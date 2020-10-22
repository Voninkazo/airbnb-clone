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

    const [countAdult, setAdultCount] = useState(0);
    function incrementAdult() {
      setAdultCount(prevCount => prevCount + 1);
    }

    function decrementAdult() {
        setAdultCount(prevCount => prevCount - 1);
    }

    const [countChildren, setChildrenCount] = useState(0);
    function incrementChildren() {
      setChildrenCount(prevCount => prevCount + 1);
    }

    function decrementChildren() {
        setChildrenCount(prevCount => prevCount - 1);
    }

    let allGuests = countAdult + countChildren;

    const [filterByGuests, setFilterByGuest] = useState(allStays);
    function handleFilterGuest(e) {
        console.log(e.target.value);
        setFilterByGuest(filteredState.filter(
            guest => guest.maxGuests >= allGuests
        ))
    }

    return(
            <div>
                {isOpen &&
                <ModalForm 
                incrementAdult={incrementAdult}
                decrementAdult={decrementAdult}
                incrementChildren={incrementChildren}
                decrementChildren={decrementChildren}
                handleClick={handleClick} 
                handleChange={handleChange}
                handleFilterGuest={handleFilterGuest}
                countAdult={countAdult}
                countChildren={countChildren}
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
import React, { useState } from 'react';
import stays from './stays.json';
import Stays from './Stays';
import ModalForm from './ModalForm';
import ButtonsComponent from './ButtonsComponent';

export default function Airbnb() {
    const allStays = stays;
    const [isOpen, setIsOpen] = useState(false);
    const [townStays, setTownStays] = useState(allStays);
    const [input, setInput] = useState('');
    const [countAdult, setAdultCount] = useState(0);
    const [countChildren, setChildrenCount] = useState(0);

    let allGuests = countAdult + countChildren;

    for(let i = 0;i < allStays.length; i++) {
       allStays[i].id = i;
    }

    function handleClick() {
        setIsOpen(!isOpen);
    }
    
    function incrementAdult() {
      setAdultCount(prevCount => prevCount + 1);
    }

    function decrementAdult() {
        if(countAdult > 0) {
            setAdultCount(prevCount => prevCount - 1);
        }
    }

    function incrementChildren() {
            setChildrenCount(prevCount => prevCount + 1);
    }

    function decrementChildren() {
        if (countChildren > 0) {
            setChildrenCount(prevCount => prevCount - 1);
        }
    }

    function handleChange (e) {
        console.log(allStays)
      console.log(  e.target.value);
        setTownStays(allStays.filter(
         stays => stays.city.toLowerCase() === e.target.value.toLowerCase()
         ))
         setInput(e.target.value, "Finland");
         // setIsOpen(!isOpen);
         // console.log(filteredState);
     }

        const filteredByGuests= townStays.filter(
            guest => guest.maxGuests >= allGuests
        )

    return(
            <div className="big-container">
                {isOpen &&
                <ModalForm 
                incrementAdult={incrementAdult}
                decrementAdult={decrementAdult}
                incrementChildren={incrementChildren}
                decrementChildren={decrementChildren}
                handleClick={handleClick} 
                handleChange={handleChange}
                countAdult={countAdult}
                countChildren={countChildren}
                allGuests={allGuests}
                allStay={allStays}
                input={input}
                />
                }

                <ButtonsComponent 
                handleClick={handleClick}
                />

                <div className="stays">
                {
                    filteredByGuests.map(stay => {
                        return (
                        <Stays key={stay.id} stay={stay} allStays={allStays} filteredByGuests={ filteredByGuests}/>
                        )
                    })
                }
                </div>
            </div>
    )
}
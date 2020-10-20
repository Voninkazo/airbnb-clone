import React from 'react';
import stays from './stays.json';
import Stays from './Stays';

export default function Airbnb() {
    const allStays = stays;
    const id = allStays.forEach(( index) => Date.now() + index);
    console.log(id);

    return(
            <div  className="stays">
                {
                    allStays.map(stay => {
                        return (
                            <Stays key={id} stay={stay}/>
                        )
                    })
                }
            </div>
    )
}
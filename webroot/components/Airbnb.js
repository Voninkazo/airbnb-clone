import React from 'react';
import stays from './stays.json';
import Stays from './Stays';
import Form from './Form';

export default function Airbnb() {
    const allStays = stays;
    const id = allStays.forEach(( index) => Date.now() + index);
    console.log(id);

    return(
            <div>
                <Form />
                <div  className="stays">
                {
                    allStays.map(stay => {
                        return (
                            <Stays stay={stay}/>
                        )
                    })
                }
                </div>
            </div>
    )
}
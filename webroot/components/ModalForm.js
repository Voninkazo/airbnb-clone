import React from 'react';
import IconClose from '../icons/close.svg';
import Filters from './Filters';

export default function ModalForm(props) {


    return(
        <div className="popup">
                <div className="popup-content">
                    <p className="close-icon" onClick={props.handleClick}>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#333333" fillRule="evenodd"/></svg>
                    </p>
                        <Filters 
                        incrementAdult={props.incrementAdult}
                        decrementAdult={props.decrementAdult}
                        incrementChildren={props.incrementChildren}
                        decrementChildren={props.decrementChildren}
                        countAdult={props.countAdult}
                        countChildren={props.countChildren}
                        allStay={props.allStay}
                        handleChange={props.handleChange}
                        handleClick={props.handleClick}
                        allStays={props.allStays}
                        allGuests={props.allGuests}
                        input={props.input}
                        />
                </div>  
        </div>
    )
}
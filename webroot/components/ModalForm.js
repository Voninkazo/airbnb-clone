import React from 'react';
import IconClose from '../icons/close.svg';
import IconSearch from '../icons/search.svg';
import Filters from './Filters';

export default function ModalForm(props) {
    return(
        <div className="popup">
                <div className="popup-content">
                        <Filters 
                        incrementAdult={props.incrementAdult}
                        decrementAdult={props.decrementAdult}
                        incrementChildren={props.incrementChildren}
                        decrementChildren={props.decrementChildren}
                        countAdult={props.countAdult}
                        countChildren={props.countChildren}
                        allStay={props.allStay}
                        handleChange={props.handleChange}
                        />

                        <button type="button" value="Search" className="search">
                            <img src={IconSearch} alt="" />
                            Search
                        </button>
                        <p className="close-icon" onClick={props.handleClick}>
                            <img src={IconClose} alt=""/>
                        </p>
                </div>
            </div>
    )
}
import React, { useState } from 'react';
import stays from './stays.json';
import Stays from './Stays';
import IconClose from '../icons/close.svg';
// import ModalForm from './ModalForm';
import IconSearch from '../icons/search.svg';

export default function Airbnb() {
    const allStays = stays;
    const [isOpen, setIsOpen] = useState(false);


    function openPopup() {
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
        console.log('closed')
    }

    return(
            <div>
                {isOpen &&
                <div className="popup">
                <div className="popup-content">
                    <form className="modal-form">
                        <label>
                            <input type="text" name="city" placeholder="Location" />
                        </label>
                        <label>
                        <input type="text" name="guests" placeholder="Add guests" />
                        </label>
                        <button type="button" className="search" value="Search">
                            <img src={IconSearch} alt="" />
                        </button>
                        <p className="close-icon" onClick={handleClose}>
                            <img src={IconClose} alt=""/>
                        </p>
                    </form>
                </div>
            </div>
                }
                <form className="form">
                    <label>
                        <input type="text" name="city" placeholder="Location" />
                    </label>
                    <label>
                    <input type="text" name="guests" placeholder="Add guests" />
                    </label>
                    <button onClick={openPopup} type="button" className="search">
                        <img src={IconSearch} alt="" />
                    </button>
                </form>
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
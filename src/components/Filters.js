import React, { useState } from 'react'
import LocationImg from '../icons/location.png'

export default function Filters({
  handleChange,
  incrementAdult,
  incrementChildren,
  countAdult,
  countChildren,
  decrementAdult,
  decrementChildren,
  toggleModal,
  input,
}) {
  const [openList, setOpenList] = useState(false)
  const [openIncrement, setOpenIncrement] = useState(false)
  const locations = ['Helsinki', 'Oulu', 'Turku', 'Vaasa']

  function handleOpenList() {
    setOpenList(!openList)
  }

  function handleOpenIncrement() {
    setOpenIncrement(!openIncrement)
  }

  return (
    <form className='modal-form'>
      <div className='form-container'>
        <label htmlFor='stay'>Location</label>
        <input
          type='text'
          name='stay'
          placeholder='Location'
          value={input}
          onChange={handleChange}
          onClick={handleOpenList}
        />
        <div>
          {openList && (
            <ul className='location-container'>
              {locations.map((location, index) => {
                return (
                  <li key={index} className='location'>
                    <img src={LocationImg} alt='Location Image' />
                    <button
                      type='button'
                      value={location}
                      onClick={handleChange}
                      className='location-text'>
                      {location}, Finland
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className='form-container'>
        <label htmlFor='guest'> Guests</label>
        <input
          type='text'
          name='guest'
          id='guests'
          placeholder='guests'
          onClick={handleOpenIncrement}
        />
        <div>
          {openIncrement && (
            <div>
              <ul className='increment-container'>
                <li>
                  <p className='specification'>Adults</p>
                  <small className='ages'>Ages 13 or above:</small>
                </li>
                <li>
                  <button type='button' onClick={incrementAdult}>
                    +
                  </button>
                  <span className='adults-num'>{countAdult}</span>
                  <button
                    className='minus-btn'
                    type='button'
                    onClick={decrementAdult}>
                    -
                  </button>
                </li>
              </ul>
              <ul className='increment-container'>
                <li>
                  <p>Children</p>
                  <small>Ages 2-12</small>
                </li>
                <li>
                  <button type='button' onClick={incrementChildren}>
                    +
                  </button>
                  <span className='child-num'>{countChildren}</span>
                  <button
                    className='minus-btn'
                    type='button'
                    onClick={decrementChildren}>
                    -
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <button
        type='button'
        value='Search'
        className='search filter-search'
        onClick={toggleModal}>
        Search
      </button>
    </form>
  )
}

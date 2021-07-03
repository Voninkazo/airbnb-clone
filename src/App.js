import React, { useState } from 'react'
import stays from '../stays.json'
import Stays from './components/Stays'
import Modal from './components/Modal'
import Buttons from './components/Buttons'

export default function App() {
  const allStays = stays
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [countAdult, setAdultCount] = useState(0)
  const [countChildren, setChildrenCount] = useState(0)

  let allGuests = countAdult + countChildren

  for (let i = 0; i < allStays.length; i++) {
    allStays[i].id = i
  }

  function incrementAdult() {
    setAdultCount((prevCount) => prevCount + 1)
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  function decrementAdult() {
    if (countAdult > 0) {
      setAdultCount((prevCount) => prevCount - 1)
    }
  }

  function incrementChildren() {
    setChildrenCount((prevCount) => prevCount + 1)
  }

  function decrementChildren() {
    if (countChildren > 0) {
      setChildrenCount((prevCount) => prevCount - 1)
    }
  }

  const filterStaysByLocation = (stays) => {
    return stays.filter((stays) =>
      stays.city.toLowerCase().includes(input.toLowerCase())
    )
  }

  const filterStaysByGuests = (stays) => {
    return stays.filter((guest) => guest.maxGuests >= allGuests)
  }
  const filteredStays = filterStaysByLocation(filterStaysByGuests(allStays))

  return (
    <div className='big-container'>
      {isOpen && (
        <Modal
          handleChange={(e) => setInput(e.target.value, 'Finland')}
          incrementAdult={incrementAdult}
          incrementChildren={incrementChildren}
          countAdult={countAdult}
          countChildren={countChildren}
          decrementAdult={decrementAdult}
          decrementChildren={decrementChildren}
          toggleModal={toggleModal}
          input={input}
        />
      )}

      <Buttons toggleModal={toggleModal} />
      <div className='heading_container'>
        <h2>Stays in Finland</h2>
        {filteredStays.length !== 0 ? (
          <p>
            {filteredStays.length > 12
              ? '12+ stays'
              : filteredStays.length === 1
              ? `${filteredStays.length} stay`
              : `${filteredStays.length} stays`}
          </p>
        ) : (
          <p>{allStays.length} stays</p>
        )}
      </div>

      <div className='stays'>
        {filteredStays.map((stay) => {
          return <Stays key={stay.id} stay={stay} />
        })}
      </div>
    </div>
  )
}

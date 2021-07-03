import React from 'react'
import IconStar from '../icons/star.svg'

export default function Satys({ stay }) {
  return (
    <div className='stay_container'>
      <div className='img_wrapper'>
        <img src={stay.photo} alt={stay.title} className='house_feature' />
      </div>
      <ul className='list_container'>
        {stay.superHost ? <li className='super_host'>SUPERHOST</li> : ''}
        <li>{stay.type}</li>
        <li>{stay.beds} beds</li>
        <li className='rating'>
          <img
            style={{ width: '15px', height: '15px' }}
            src={IconStar}
            alt='House'
          />
          <span>{stay.rating}</span>
        </li>
      </ul>
    </div>
  )
}

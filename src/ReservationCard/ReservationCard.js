import React from 'react'
import './ReservationCard.css'

function ReservationCard({reservation}) {
    const {name, date, time, number} = reservation;
  return (
    <div className='reservation-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}pm</p>
      <p>Number of guests: {number}</p>
    </div>
  )
}

export default ReservationCard

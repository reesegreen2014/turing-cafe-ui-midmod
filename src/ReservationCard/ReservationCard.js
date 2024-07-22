import React from 'react'

function ReservationCard({reservation}) {
    const {name, date, time, number} = reservation;
  return (
    <div className='reversation-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}pm</p>
      <p>Number of guests: {number}</p>
    </div>
  )
}

export default ReservationCard

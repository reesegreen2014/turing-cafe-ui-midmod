import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'
import './ReservationList.css';

function ReservationList({reservations}) {
  return (
    <div className='reservation-list'>
      {reservations.map(reservation => (
        <ReservationCard key={reservation.id} reservation={reservation} />
      ))}
    </div>
  )
}

export default ReservationList

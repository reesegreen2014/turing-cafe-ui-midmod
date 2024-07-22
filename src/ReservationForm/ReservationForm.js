import React, { useState } from 'react';
import './ReservationForm.css';

function ReservationForm({addReservation}) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newReservation = {
            id: Date.now(),
            name,
            date,
            time,
            number: parseInt(number, 10)
        };
        addReservation(newReservation);
        setName('');
        setDate();
        setTime();
        setNumber();
    };

  return (
    <form className='resy-form' onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
        />
        <input 
            type="text"
            placeholder='Date (mm/dd)'
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
        />
        <input 
            type="text"
            placeholder='Time'
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
        />
        <input 
            type="text"
            placeholder='Number of guests'
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            required
        />
        <button type="submit">Make Reservation</button>
    </form>
  )
}

export default ReservationForm

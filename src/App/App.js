import './App.css';
import React, { useEffect, useState } from 'react';
import fetchReservations from '../apiCalls';
import ReservationList from '../ReservationList/ReservationList';
import ReservationForm from '../ReservationForm/ReservationForm';
function App() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    fetchReservations()
      .then(data => setReservations(data))
      .catch(error => console.error('Error getting reservations:', error))
  }, []);

  const postReservation = (newReservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReservation)
    })
    .then(response => response.json())
    .then(postedReservation => {
      setReservations([...reservations, postedReservation])
    })
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <ReservationForm addReservation={postReservation} />
      </div>
      <div className='resy-container'>
        <ReservationList reservations={reservations} />
      </div>
    </div>
  );
}

export default App; 
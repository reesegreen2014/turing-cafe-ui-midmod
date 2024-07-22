import './App.css';
import React, { useEffect, useState } from 'react';
import fetchReservations from '../apiCalls';
import ReservationList from '../ReservationList/ReservationList';

function App() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    fetchReservations()
      .then(data => setReservations(data))
      .catch(error => console.error('Error getting reservations:', error))
  }, [])

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
        <ReservationList reservations={reservations} />
      </div>
    </div>
  );
}

export default App; 
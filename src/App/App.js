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

  const addReservation = (newReservation) => {
    setReservations([...reservations, newReservation])
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <ReservationForm addReservation={addReservation} />
      </div>
      <div className='resy-container'>
        <ReservationList reservations={reservations} />
      </div>
    </div>
  );
}

export default App; 
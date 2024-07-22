import './App.css';
import React, { useEffect } from 'react';
import fetchReservations from '../apiCalls';

function App() {
  useEffect(() => {
    fetchReservations();
  }, [])
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div>
    </div>
  );
}

export default App; 
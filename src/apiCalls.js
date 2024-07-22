const apiURL = 'http://localhost:3001/api/v1';

const fetchReservations = () => {
    fetch(`${apiURL}/reservations`) 
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

export default fetchReservations;
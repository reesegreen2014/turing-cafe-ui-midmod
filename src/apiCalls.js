const apiURL = 'http://localhost:3001/api/v1';

const fetchReservations = () => {
    return fetch(`${apiURL}/reservations`) 
    .then(response => response.json())
    .catch(error => console.log(error))
}

export default fetchReservations;
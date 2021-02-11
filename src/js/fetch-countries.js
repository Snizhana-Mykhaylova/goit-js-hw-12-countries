import { showError } from './notifications';

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something bad happend');
    })
    .catch(error => showError(error));
}

export default fetchCountries;

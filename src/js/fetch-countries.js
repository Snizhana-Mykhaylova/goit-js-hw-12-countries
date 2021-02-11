import { showError } from './notifications';

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => response.json())
    .catch(showError());
}

export default fetchCountries;

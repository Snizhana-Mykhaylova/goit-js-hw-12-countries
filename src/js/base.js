import fetchCountries from './fetch-countries';
import { updateMarkup, cleanMarkup } from './markup';
import refs from './refs';
const debounce = require('lodash.debounce');

refs.searchInput.addEventListener(
  'input',
  debounce(event => {
    const inputValue = refs.searchInput.value;
    if (inputValue !== '') {
      console.log(inputValue);
      cleanMarkup();
      fetchCountries(inputValue).then(countries => {
        updateMarkup(countries);
      });
    }
  }, 500),
);

import refs from './refs';
import countryArticleTpl from '../templates/countryArticle.hbs';
import countriesListTpl from '../templates/countriesList.hbs';
import { showNotice } from './notifications';

function updateMarkup(items) {
  if (items === undefined) {
    return;
  }

  if (items.length >= 10) {
    showNotice();
  }

  if (items.length >= 2 && items.length < 10) {
    const markup = countriesListTpl(items);
    refs.countreisList.insertAdjacentHTML('beforeend', markup);
  }

  if (items.length === 1) {
    const markup = countryArticleTpl(items);
    refs.article.insertAdjacentHTML('beforeend', markup);
  }
}

function cleanMarkup() {
  refs.article.innerHTML = '';
  refs.countreisList.innerHTML = '';
}

export { updateMarkup, cleanMarkup };

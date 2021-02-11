import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { notice, error } from '@pnotify/core';

function showNotice() {
  notice({
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 3000,
  });
}

function showError() {
  const myError = error({
    text: 'No matches found',
    delay: 3000,
  });
}

export { showNotice, showError };

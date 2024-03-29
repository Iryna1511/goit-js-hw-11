// У файлі main.js напиши всю логіку роботи додатка.
import './js/pixabay-api';
import { getImages } from './js/pixabay-api';
import './js/render-function';
import { createMarkUp } from './js/render-function';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('input');
const galleryEl = document.querySelector('.gallery');

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const markUp = getImages(inputEl.value)
    .then(response => {
      createMarkUp(response.hits);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });

  //   createMarkUp(hits);
});

// galleryEl.insertAdjacentHTML('beforeend', createMarkUp);

// iziToast.error({
//   color: 'yellow',
//   position: 'topRight',
//   message: "Sorry, there are no images matching your search query. Please try again!",
// });

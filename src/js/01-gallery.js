import SimpleLightbox from '/node_modules/simplelightbox';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
import Notiflix from 'notiflix';
// Change code below this line

console.log(galleryItems);

Notiflix.Notify.success('Example Text');

Notiflix.Notify.failure('Didnt Work Bro');

Notiflix.Notify.warning('Maybe dont do that');

Notiflix.Notify.info('Turtles are Cute');

const galleryStuff = document.querySelector('.gallery');
const createMarkUpEl = createMarkUp(galleryItems);
galleryStuff.insertAdjacentHTML('beforeend', createMarkUpEl);

function createMarkUp(images) {
  return images
    .map(
      item =>
        `
  <li class="gallery__item">
  <a class="gallery__link" href="${item.original}" onclick="event.preventDefault()">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>
  `
    )
    .join('');
}
const lightbox = SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

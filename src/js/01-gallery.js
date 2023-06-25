import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
import Notiflix from 'notiflix';
// Change code below this line



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
const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

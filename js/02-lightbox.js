import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const markupGallery = createOfGallery(galleryItems);




function createOfGallery(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
}).join(''); 
};

  gallery.insertAdjacentHTML('beforeend', markupGallery);
  
  new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
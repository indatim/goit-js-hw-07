import { galleryItems } from './gallery-items.js';
// Change code below this line

const picContainer = document.querySelector('.gallery');
const picMaker = createPicMaker(galleryItems);
picContainer.insertAdjacentHTML('beforeend', picMaker);

function createPicMaker(items) {
    return galleryItems.map(item => {
        return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
</a>`}).join('');
}

new SimpleLightbox('.gallery a', { captionDelay: 250, navText: ['←','→'] });

// console.log(galleryItems)

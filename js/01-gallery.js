import { galleryItems } from './gallery-items.js';
// Change code below this line

const picContainer = document.querySelector('.gallery');
const picMaker = createPicMaker(galleryItems);
picContainer.insertAdjacentHTML('beforeend', picMaker);

function createPicMaker(items) {
  return galleryItems.map(item => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`}).join('');
} 

picContainer.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  } 

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
  instance.show()

  picContainer.addEventListener('keydown', e => {
    const ESC_KEY_CODE = 'Escape';
    if (e.code === ESC_KEY_CODE) {
      instance.close()
    }
	})
}

console.log(createPicMaker);
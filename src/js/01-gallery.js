// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const ulGallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);



        
function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
     return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" width="320"/></a></li>`;
})
        .join('');
}

ulGallery.insertAdjacentHTML('beforeend', galleryMarkup);
// ulGallery.addEventListener('click', onGalleryClick);


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});



// function onGalleryClick(event) {
//   event.preventDefault();

  
//   if (event.target.nodeName === 'IMG') {

//     lightbox.open(event.target.closest('a'));
//   }
// }



import {
  renderPictures,
  onOpenPictureModal,
  onPictureEnterPress
} from './preview-picture.js';
import {
  fileInputElement,
  onOpenUploadModal
} from './upload-picture.js';

renderPictures();

const pictureWrapElement = document.querySelector('.pictures');

pictureWrapElement.addEventListener('click', (evt) => {
  if (evt.target && evt.target.classList.contains('picture__img')) {
    evt.preventDefault();
    onOpenPictureModal(evt);
  }
});

pictureWrapElement.addEventListener('keydown', (evt) => {
  if (evt.target && evt.target.classList.contains('picture')) {
    evt.preventDefault();
    onPictureEnterPress(evt);
  }
});

fileInputElement.addEventListener('change', onOpenUploadModal);

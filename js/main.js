import {
  renderPictures,
  onopenPictureModal,
  onPictureEnterPress
} from './preview-picture.js';
import {
  fileInputElement,
  onopenUploadModal
} from './upload-picture.js';

renderPictures();

const pictureWrap = document.querySelector('.pictures');

pictureWrap.addEventListener('click', (evt) => {
  if (evt.target && evt.target.classList.contains('picture__img')) {
    evt.preventDefault();
    onopenPictureModal(evt);
  }
});

pictureWrap.addEventListener('keydown', (evt) => {
  if (evt.target && evt.target.classList.contains('picture')) {
    evt.preventDefault();
    onPictureEnterPress(evt);
  }
});

fileInputElement.addEventListener('change', onopenUploadModal);

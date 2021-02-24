import {
  renderPictures,
  onopenPictureModal,
  onPictureEnterPress
} from './preview-picture.js';
import {
<<<<<<< HEAD
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
=======
  renderPictures,
  onPictureClick,
  onPictureEnterPress
} from './prewiew-picture.js';

checkLengthComment('hello', MAX_LENGTH_COMMENT);
renderPictures();

const pictures = document.querySelectorAll('a.picture');
pictures.forEach(element => element.addEventListener('click', onPictureClick));
pictures.forEach(element => element.addEventListener('keydown', onPictureEnterPress));
>>>>>>> 7208d60607304a4ae4128ff35c9aa0b78a751df5

import {
  MAX_LENGTH_COMMENT,
  checkLengthComment
} from './util.js';

import {
  renderPictures,
  onPictureClick,
  onPictureEnterPress
} from './prewiew-picture.js';

checkLengthComment('hello', MAX_LENGTH_COMMENT);
renderPictures();

const pictures = document.querySelectorAll('a.picture');
pictures.forEach(element => element.addEventListener('click', onPictureClick));
pictures.forEach(element => element.addEventListener('keydown', onPictureEnterPress));

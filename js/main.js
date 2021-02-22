import {
  renderPictures,
  onPictureClick,
  onPictureEnterPress
} from './prewiew-picture.js';
import {
  fileInputElement,
  openUploadModal
} from './upload-picture.js';

renderPictures();

//оставляю так для наглядности, возможно в будущем удалится, пересмотреть на финальной стадии.
const pictures = document.querySelectorAll('a.picture');
pictures.forEach(element => element.addEventListener('click', onPictureClick));
pictures.forEach(element => element.addEventListener('keydown', onPictureEnterPress));


fileInputElement.addEventListener('change', openUploadModal);

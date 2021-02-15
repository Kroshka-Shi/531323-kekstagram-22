
import {
  openPictureModal,
  randomPhotoData
} from './big-picture.js';
import {
  isEnterEvent
} from './util.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplateBlock = document.querySelector('#picture');
const pictureTemplate = pictureTemplateBlock.content.querySelector('a.picture');

const renderPicture = (photoData) => {
  let element = pictureTemplate.cloneNode(true);
  element.dataset.photoId = photoData.id;
  element.querySelector('.picture__img').src = photoData.url;
  element.querySelector('.picture__comments').innerText = photoData.comments.length;
  element.querySelector('.picture__likes').innerText = photoData.likes;
  return element;
};

const renderPictures = () => {
  let fragment = document.createDocumentFragment();
  randomPhotoData.forEach(element => fragment.appendChild(renderPicture(element)));
  pictureContainer.appendChild(fragment);
};

const onPictureClick = (evt) => {
  evt.preventDefault();
  openPictureModal(evt);
};

const onPictureEnterPress = (evt) => {
  if (isEnterEvent(evt)) {
    evt.preventDefault();
    openPictureModal(evt);
  }
};

export {
  renderPictures,
  onPictureClick,
  onPictureEnterPress
};

import {
  onopenPictureModal,
  randomPhotoData
} from './big-picture.js';
import {
  isEnterEvent
} from './util.js';

const pictureContainerElement = document.querySelector('.pictures');
const pictureTemplateBlockElement = document.querySelector('#picture');
const pictureTemplateElement = pictureTemplateBlockElement.content.querySelector('a.picture');

const renderPicture = (photoData) => {
  const element = pictureTemplateElement.cloneNode(true);
  element.dataset.photoId = photoData.id;
  element.querySelector('.picture__img').src = photoData.url;
  element.querySelector('.picture__comments').innerText = photoData.comments.length;
  element.querySelector('.picture__likes').innerText = photoData.likes;
  return element;
};

const renderPictures = () => {
  const fragment = document.createDocumentFragment();
  randomPhotoData.forEach(element => fragment.appendChild(renderPicture(element)));
  pictureContainerElement.appendChild(fragment);
};

const onPictureEnterPress = (evt) => {
  if (!isEnterEvent(evt)) {
    return
  }
  evt.preventDefault();
  onopenPictureModal(evt);
};

export {
  renderPictures,
  onopenPictureModal,
  onPictureEnterPress
};

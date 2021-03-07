import {
  onOpenPictureModal
} from './big-picture.js';

import {
  isEnterEvent
} from './util.js';

const pictureContainerElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture').content.querySelector('a.picture');
const pictureWrapElement = document.querySelector('.pictures');

const renderPicture = (photoData) => {
  const element = pictureTemplateElement.cloneNode(true);
  element.dataset.photoId = photoData.id;
  element.querySelector('.picture__img').src = photoData.url;
  element.querySelector('.picture__comments').innerText = photoData.comments.length;
  element.querySelector('.picture__likes').innerText = photoData.likes;
  return element;
};

const checkClass = (evt, className, func) => {
  if (evt.target && evt.target.classList.contains(className)) {
    evt.preventDefault();
    func(evt);
  }
};

const renderPictures = (photoData) => {
  const fragment = document.createDocumentFragment();
  photoData.forEach(element => fragment.appendChild(renderPicture(element)));
  pictureContainerElement.appendChild(fragment);
  pictureWrapElement.addEventListener('click', (evt) => {
    checkClass(evt, 'picture__img', onOpenPictureModal);
  });
  pictureWrapElement.addEventListener('keydown', (evt) => {
    checkClass(evt, 'picture', onPictureEnterPress)
  });
};

const onPictureEnterPress = (evt) => {
  if (!isEnterEvent(evt)) {
    return
  }
  evt.preventDefault();
  onOpenPictureModal(evt);
};

export {
  renderPictures,
  onOpenPictureModal,
  onPictureEnterPress
};

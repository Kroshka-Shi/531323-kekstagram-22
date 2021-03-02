import {
  onOpenPictureModal
} from './big-picture.js';
import {
  isEnterEvent
} from './util.js';

const pictureContainerElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture').content.querySelector('a.picture');

const renderPicture = (photoData) => {
  const element = pictureTemplateElement.cloneNode(true);
  element.dataset.photoId = photoData.id;
  element.querySelector('.picture__img').src = photoData.url;
  element.querySelector('.picture__comments').innerText = photoData.comments.length;
  element.querySelector('.picture__likes').innerText = photoData.likes;
  return element;
};

const onPictureEvt = () => {
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
}

const renderPictures = (photoData) => {
  const fragment = document.createDocumentFragment();
  photoData.forEach(element => fragment.appendChild(renderPicture(element)));
  pictureContainerElement.appendChild(fragment);
  onPictureEvt();
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

import {
  isEscEvent
} from './util.js';
import {
  photoData,
  createArrayOfEntities
} from './photo-data.js';

import {
  MAX_PHOTO
} from './constants.js'

const bigPictureListElement = document.querySelector('.big-picture');
const bigPictureImageElement = bigPictureListElement.querySelector('img');
const bigPictureLikesElement = bigPictureListElement.querySelector('.likes-count');
const bigPictureCommentCountElement = bigPictureListElement.querySelector('.comments-count');
const bigPictureCommentsBlockElement = bigPictureListElement.querySelector('.social__comments');
const bigPictureDescriptionElement = bigPictureListElement.querySelector('.social__caption');
const bigPictureCommentCountBlockElement = bigPictureListElement.querySelector('.social__comment-count');
const bigPictureCommentsLoaderElement = bigPictureListElement.querySelector('.comments-loader');
const bigPictureCloseElement = bigPictureListElement.querySelector('.big-picture__cancel');

const randomPhotoData = createArrayOfEntities(MAX_PHOTO, photoData);

const templateCommentElement = document.querySelector('#social__comment').content.querySelector('.social__comment');

const renderComments = (commentsData) => {
  const fragment = document.createDocumentFragment();
  commentsData.forEach(({
    avatar,
    name,
    message,
  }) => {
    const element = templateCommentElement.cloneNode(true);
    element.querySelector('.social__picture').src = avatar;
    element.querySelector('.social__picture').alt = name;
    element.querySelector('.social__text').innerText = message;
    fragment.appendChild(element);
  });
  bigPictureCommentsBlockElement.innerHTML = '';
  bigPictureCommentsBlockElement.appendChild(fragment);
}

const renderPictureModalData = (pictureData) => {
  bigPictureImageElement.src = pictureData.url;
  bigPictureLikesElement.textContent = pictureData.likes;
  bigPictureCommentCountElement.textContent = pictureData.comments.length;
  bigPictureDescriptionElement.textContent = pictureData.description;
  renderComments(pictureData.comments);
};

const getPhotoId = (evt) => {
  const target = evt.target;
  if (target.dataset.photoId !== undefined) {
    return target.dataset.photoId;
  } else {
    const parentTarget = target.parentNode;
    return parentTarget.dataset.photoId;
  }
};

const getPhotoDataById = (photoId) => {
  return randomPhotoData.find((element) => {
    return element.id === parseInt(photoId); 
  });
};

const getDataModal = (evt) => {
  const photoId = getPhotoId(evt);
  const pictureDataID = getPhotoDataById(photoId);
  if (!pictureDataID) {
    return;
  }
  renderPictureModalData(pictureDataID);

}

const onOpenPictureModal = (evt) => {
  getDataModal(evt);
  bigPictureListElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  bigPictureCommentCountBlockElement.classList.add('hidden');
  bigPictureCommentsLoaderElement.classList.add('hidden');

  bigPictureCloseElement.addEventListener('click', onClosePictureModal);
  document.addEventListener('keydown', onPictureModalEscKeydown);

};

const onClosePictureModal = () => {
  bigPictureListElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCommentCountBlockElement.classList.remove('hidden');
  bigPictureCommentsLoaderElement.classList.remove('hidden');

  bigPictureCloseElement.removeEventListener('click', onClosePictureModal);
  document.removeEventListener('keydown', onPictureModalEscKeydown);
};

const onPictureModalEscKeydown = (evt) => {
  if (!isEscEvent(evt)) {
    return;
  }
  evt.preventDefault();
  onClosePictureModal();
};

export {
  onOpenPictureModal,
  randomPhotoData
};

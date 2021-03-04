import {
  isEscEvent
} from './util.js';

import {
  getPhotosData
} from './photo-data.js';

import {
  renderPictureModalData,
  bigPictureListElement
} from './comment-render.js';


const bigPictureCloseElement = bigPictureListElement.querySelector('.big-picture__cancel');

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
  const photosData = getPhotosData();
  return photosData.find((element) => {
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
};

const onOpenPictureModal = (evt) => {
  getDataModal(evt);
  bigPictureListElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureCloseElement.addEventListener('click', onClosePictureModal);
  document.addEventListener('keydown', onPictureModalEscKeydown);

};

const onClosePictureModal = () => {
  bigPictureListElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

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
  onOpenPictureModal
};

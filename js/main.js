import {
  renderPictures,
  onOpenPictureModal,
  onPictureEnterPress
} from './preview-picture.js';
import {
  fileInputElement,
  onOpenUploadModal
} from './upload-picture.js';

import {
  getData
} from './api.js';

import {
  openSuccessMessage,
  openErrorMessage,
  openDownloadErrorAlert
} from './download-status.js';

import {
  GET_DATA_URL
} from './constants.js';

import {
  setPhotosData
} from './photo-data.js';
import {
  setPhotoFormSubmit
} from './validate.js';

const pictureWrapElement = document.querySelector('.pictures');

const onPhotoDataLoaded = (photoData) => {
  setPhotosData(photoData);
  renderPictures(photoData);
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
};

getData(GET_DATA_URL, onPhotoDataLoaded, openDownloadErrorAlert);
fileInputElement.addEventListener('change', onOpenUploadModal);
setPhotoFormSubmit(openSuccessMessage, openErrorMessage);

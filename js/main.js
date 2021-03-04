import {
  renderPictures
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

import {
  showFilterButtons
} from './filters.js';

const onPhotoDataLoaded = (photoData) => {
  setPhotosData(photoData);
  renderPictures(photoData);
  showFilterButtons();
};

getData(GET_DATA_URL, onPhotoDataLoaded, openDownloadErrorAlert);
fileInputElement.addEventListener('change', onOpenUploadModal);
setPhotoFormSubmit(openSuccessMessage, openErrorMessage);

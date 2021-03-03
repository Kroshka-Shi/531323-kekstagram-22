import {
  isEscEvent
} from './util.js';
import {
  setPreviewDefaultScale,
  scaleDown,
  scaleUp,
  onEffectsChange,
  clearEffect,
  createEffectSlider,
  closeEffectSlider
} from './effects.js';

import {
  hashtagInputElement,
  commentInputElement,
  checkValidityComment,
  checkValidityHashtag
} from './validate.js';

import {
  FILE_TYPES
} from './constants.js';

const fileInputElement = document.querySelector('#upload-file');
const clientPictureElement = document.querySelector('.img-upload__preview img');

const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const modalCloseButtonElement = document.querySelector('#upload-cancel');
const uploadFormElement = document.querySelector('.img-upload__form');
const scaleControlSmallerButtonElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButtonElement = document.querySelector('.scale__control--bigger');

const onUploadModalEscPress = (evt) => {
  if (!isEscEvent(evt)) {
    return;
  }
  evt.preventDefault();
  if (commentInputElement !== document.activeElement && hashtagInputElement !== document.activeElement) {
    onCloseUploadModal();
  }
};

const uploadClientPicture = () => {
  const file = fileInputElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      clientPictureElement.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
}

const clearInputValue = () => {
  fileInputElement.value = '';
  commentInputElement.value = '';
  hashtagInputElement.value = '';
}

const onCloseUploadModal = () => {
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onUploadModalEscPress);
  modalCloseButtonElement.removeEventListener('click', onCloseUploadModal);

  scaleControlSmallerButtonElement.removeEventListener('click', scaleDown);
  scaleControlBiggerButtonElement.removeEventListener('click', scaleUp);
  uploadFormElement.removeEventListener('change', onEffectsChange);

  commentInputElement.removeEventListener('input', checkValidityComment);
  hashtagInputElement.removeEventListener('input', checkValidityHashtag);

  clearInputValue();
  closeEffectSlider();
};
const onOpenUploadModal = () => {
  uploadClientPicture();
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onUploadModalEscPress);
  modalCloseButtonElement.addEventListener('click', onCloseUploadModal);

  scaleControlSmallerButtonElement.addEventListener('click', scaleDown);
  scaleControlBiggerButtonElement.addEventListener('click', scaleUp);
  uploadFormElement.addEventListener('change', onEffectsChange);

  commentInputElement.addEventListener('input', checkValidityComment);
  hashtagInputElement.addEventListener('input', checkValidityHashtag);

  setPreviewDefaultScale();
  createEffectSlider();
  clearEffect();
};

export {
  fileInputElement,
  onOpenUploadModal,
  onCloseUploadModal
};

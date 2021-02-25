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
  checkValidityComment,
  checkValidityHashtag
} from './validate.js';

const fileInputElement = document.querySelector('#upload-file');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const modalCloseButton = document.querySelector('#upload-cancel');
const uploadFormElement = document.querySelector('.img-upload__form');
const scaleControlSmallerButtonElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButtonElement = document.querySelector('.scale__control--bigger');

const commentInputElement = document.querySelector('.text__description');
const hashtagInputElement = document.querySelector('.text__hashtags');

const onUploadModalEscPress = (evt) => {
  if (!isEscEvent(evt)) {
    return;
  }
  evt.preventDefault();
  if (commentInputElement !== document.activeElement && hashtagInputElement !== document.activeElement) {
    onCloseUploadModal();
  }
};

const onCloseUploadModal = () => {
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onUploadModalEscPress);
  modalCloseButton.removeEventListener('click', onCloseUploadModal);

  scaleControlSmallerButtonElement.removeEventListener('click', scaleDown);
  scaleControlBiggerButtonElement.removeEventListener('click', scaleUp);
  uploadFormElement.removeEventListener('change', onEffectsChange);

  commentInputElement.removeEventListener('input', checkValidityComment);
  hashtagInputElement.removeEventListener('input', checkValidityHashtag);
  
  fileInputElement.value = '';
  commentInputElement.value = '';
  hashtagInputElement.value = '';
  closeEffectSlider();
};
const onOpenUploadModal = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onUploadModalEscPress);
  modalCloseButton.addEventListener('click', onCloseUploadModal);

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
  onOpenUploadModal
};

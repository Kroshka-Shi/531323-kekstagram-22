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
  checkLength
} from './validate.js';

const fileInputElement = document.querySelector('#upload-file');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const modalCloseButton = document.querySelector('#upload-cancel');
const uploadFormElement = document.querySelector('.img-upload__form');
const scaleControlSmallerButtonElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButtonElement = document.querySelector('.scale__control--bigger');

const commentInputElement = document.querySelector('.text__description');

const onUploadModalEscPress = (evt) => {
  if (!isEscEvent(evt)) {
    return;
  }
  evt.preventDefault();
  const hashtagInputElement = document.querySelector('.text__hashtags');
  if (commentInputElement !== document.activeElement && hashtagInputElement !== document.activeElement) {
    oncloseUploadModal();
  }
};

const oncloseUploadModal = () => {
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onUploadModalEscPress);
  modalCloseButton.removeEventListener('click', oncloseUploadModal);

  scaleControlSmallerButtonElement.removeEventListener('click', scaleDown);
  scaleControlBiggerButtonElement.removeEventListener('click', scaleUp);
  uploadFormElement.removeEventListener('change', onEffectsChange);

  commentInputElement.removeEventListener('input', checkLength);

  closeEffectSlider();
  fileInputElement.value = '';
};

const onopenUploadModal = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onUploadModalEscPress);
  modalCloseButton.addEventListener('click', oncloseUploadModal);

  scaleControlSmallerButtonElement.addEventListener('click', scaleDown);
  scaleControlBiggerButtonElement.addEventListener('click', scaleUp);
  uploadFormElement.addEventListener('change', onEffectsChange);

  commentInputElement.addEventListener('input', checkLength);

  setPreviewDefaultScale();
  clearEffect();
  createEffectSlider();
};

export {
  fileInputElement,
  onopenUploadModal
};

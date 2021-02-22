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

const fileInputElement = document.querySelector('#upload-file');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const modalCloseButton = document.querySelector('#upload-cancel');
const uploadFormElement = document.querySelector('.img-upload__form');
const scaleControlSmallerButtonElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButtonElement = document.querySelector('.scale__control--bigger');

const onUploadModalEscPress = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUploadModal();
  }
};

const closeUploadModal = () => {
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onUploadModalEscPress);
  modalCloseButton.removeEventListener('click', closeUploadModal);

  scaleControlSmallerButtonElement.removeEventListener('click', scaleDown);
  scaleControlBiggerButtonElement.removeEventListener('click', scaleUp);
  uploadFormElement.removeEventListener('change', onEffectsChange);
  closeEffectSlider();
  fileInputElement.value = '';
};

const openUploadModal = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onUploadModalEscPress);
  modalCloseButton.addEventListener('click', closeUploadModal);

  scaleControlSmallerButtonElement.addEventListener('click', scaleDown);
  scaleControlBiggerButtonElement.addEventListener('click', scaleUp);
  uploadFormElement.addEventListener('change', onEffectsChange);
  setPreviewDefaultScale();
  clearEffect();
  createEffectSlider();
};

export {
  fileInputElement,
  openUploadModal
};

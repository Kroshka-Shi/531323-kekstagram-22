import {
  checkLengthComment
} from './util.js';

import {
  MAX_LENGTH_COMMENT,
  MAX_COUNT_HASHTAG,
  HASHTAG_REGEX,
  FORMAT_ERROR_MESSAGE,
  COUNT_ERROR_MESSAGE,
  UNIQUE_ERROR_MESSAGE,
  LENGTH_ERROR_MESSAGE,
  SEND_DATA_URL
} from './constants.js';

import {
  sendData
} from './api.js';
import {
  onCloseUploadModal
} from './upload-picture.js'

const uploadFormElement = document.querySelector('.img-upload__form');
const hashtagInputElement = document.querySelector('.text__hashtags');
const commentInputElement = document.querySelector('.text__description');

const checkValidityComment = (evt) => {
  if (!checkLengthComment(evt.target.value, MAX_LENGTH_COMMENT)) {
    evt.target.setCustomValidity(LENGTH_ERROR_MESSAGE);
    commentInputElement.classList.add('border--error');
  } else {
    evt.target.setCustomValidity('');
    commentInputElement.classList.remove('border--error');
  }
  evt.target.reportValidity();
}

const checkFormTag = (word) => {
  return HASHTAG_REGEX.test(word);
};

const checkUniqueTag = (array) => {
  const hashtagLower = array.map(elem => {
    return elem.toLowerCase();
  });
  const uniqueArr = new Set(hashtagLower);
  return array.length === uniqueArr.size;
}


const checkValidityHashtag = (evt) => {
  const hashtagArrOrigin = evt.target.value.split(' ');
  const hashtagArray = hashtagArrOrigin.filter(elem => elem !== '');

  const hashtagErrorCount = hashtagArray.length > MAX_COUNT_HASHTAG
  const hashtagErrorFormat = !hashtagArray.every(checkFormTag);
  const hashtagErrorUniq = !checkUniqueTag(hashtagArray);

  if (hashtagErrorFormat) {
    evt.target.setCustomValidity(FORMAT_ERROR_MESSAGE);
    hashtagInputElement.classList.add('border--error');
  } else if (hashtagErrorCount) {
    evt.target.setCustomValidity(COUNT_ERROR_MESSAGE);
    hashtagInputElement.classList.add('border--error');
  } else if (hashtagErrorUniq) {
    evt.target.setCustomValidity(UNIQUE_ERROR_MESSAGE);
    hashtagInputElement.classList.add('border--error');
  } else {
    evt.target.setCustomValidity('');
    hashtagInputElement.classList.remove('border--error');
  }

  evt.target.reportValidity();
  //поработать с пробелами в отправке на сервер как останется время
}

const setPhotoFormSubmit = (onSuccess, onError) => {
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    sendData(SEND_DATA_URL, formData, onSuccess, onError);
    onCloseUploadModal();
  })
}


export {
  hashtagInputElement,
  commentInputElement,
  checkValidityComment,
  checkValidityHashtag,
  setPhotoFormSubmit
}

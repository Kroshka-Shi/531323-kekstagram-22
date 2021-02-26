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
  LENGTH_ERROR_MESSAGE
} from './constants.js';

const checkValidityComment = (evt) => {
  if (!checkLengthComment(evt.target.value, MAX_LENGTH_COMMENT)) {
    evt.target.setCustomValidity(LENGTH_ERROR_MESSAGE);
  } else {
    evt.target.setCustomValidity('');
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
};

const checkValidityHashtag = (evt) => {
  const hashtagArrOrigin = evt.target.value.split(' ');
  const hashtagArray = hashtagArrOrigin.filter(elem => elem !== '');

  const hashtagErrorCount = hashtagArray.length > MAX_COUNT_HASHTAG 
  const hashtagErrorFormat = !hashtagArray.every(checkFormTag); 
  const hashtagErrorUniq = !checkUniqueTag(hashtagArray);


  if (hashtagErrorFormat) {
    evt.target.setCustomValidity(FORMAT_ERROR_MESSAGE);
  } else if (hashtagErrorCount) {
    evt.target.setCustomValidity(COUNT_ERROR_MESSAGE);
  } else if (hashtagErrorUniq) {
    evt.target.setCustomValidity(UNIQUE_ERROR_MESSAGE);
  } else {
    evt.target.setCustomValidity('');
  }

  evt.target.reportValidity();
  //поработать с пробелами в отправке на сервер как останется время
}


export {
  checkValidityComment,
  checkValidityHashtag
}

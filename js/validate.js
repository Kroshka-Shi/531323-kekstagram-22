/*2.3. Хэш-теги:
    --один и тот же хэш-тег не может быть использован дважды;
  */
import {
  checkLengthComment
} from './util.js';

import {
  MAX_LENGTH_COMMENT,
  MAX_COUNT_HASHTAG
} from './constants.js';

const checkValidityComment = (evt) => {
  if (!checkLengthComment(evt.target.value, MAX_LENGTH_COMMENT)) {
    evt.target.setCustomValidity('Комментарий не может быть больше ' + MAX_LENGTH_COMMENT + ' символов');
  } else {
    evt.target.setCustomValidity('');
  }
  evt.target.reportValidity();
}

const isHashtag = (word) => {
  const hashtagRegex = /^#[а-яА-ЯёЁa-zA-Z0-9]{1,19}$/; // (вначале нет # и недопуст символы и блина больше 20)
  return hashtagRegex.test(word);
};

const isUniqueTag = (array) => {
  const hashtagLower = array.map(elem => {
    return elem.toLowerCase();
  });
  const uniqueArr = new Set(hashtagLower);
  return array.length === uniqueArr.size;
};

const checkValidityHashtag = (evt) => {
  const hashtagArrOrigin = evt.target.value.split(' ');
  const hashtagArray = hashtagArrOrigin.filter(elem => elem !== ''); //зачищаем если больше 1 пробела

  const hashtagErrorCount = hashtagArray.length > MAX_COUNT_HASHTAG //флаг если больше 5 тэгов
  const hashtagErrorFormat = !hashtagArray.every(isHashtag); //флаг на неверный формат 
  const hashtagErrorUniq = !isUniqueTag(hashtagArray);// флаг уникальности

 
  if (hashtagErrorFormat) {
    evt.target.setCustomValidity(`Хэштег должен начинаться с # и состоять из букв и чисел,
    и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), 
    символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т.д`);
  } else if (hashtagErrorCount) {
    evt.target.setCustomValidity(`Максимальное колличество хэштегов ${MAX_COUNT_HASHTAG}`);
  } else if (hashtagErrorUniq) {
    evt.target.setCustomValidity('Хэштег должен быть уникальным.');
  } else {
    evt.target.setCustomValidity('');
  }

  evt.target.reportValidity();
  
}


export {
  checkValidityComment,
  checkValidityHashtag
}

/*2.3. Хэш-теги:

    --хэш-тег начинается с символа # (решётка);
    --строка после решётки должна состоять из букв и чисел и не может содержать пробелы,
    спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
    --хеш-тег не может состоять только из одной решётки;
    --максимальная длина одного хэш-тега 20 символов, включая решётку;
    --хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
    --хэш-теги разделяются пробелами;
    --один и тот же хэш-тег не может быть использован дважды;
    --нельзя указать больше пяти хэш-тегов;
  */
import {
  checkLengthComment
} from './util.js';

import {
  MAX_LENGTH_COMMENT
} from './constants.js';

const checkLength = (evt) => {
  if (!checkLengthComment(evt.target.value, MAX_LENGTH_COMMENT)) {
    evt.target.setCustomValidity('Комментарий не может быть больше ' + MAX_LENGTH_COMMENT + ' символов, удалите ' + evt.target.value - MAX_LENGTH_COMMENT);
  } else {
    evt.target.setCustomValidity('');
  }
  evt.target.reportValidity();
}

export {
  checkLength
}

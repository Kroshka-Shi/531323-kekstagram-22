import {
  MAX_LENGTH_COMMENT,
  checkLengthComment
} from './util.js';

import {
  renderPictureList
} from './template-picture.js';

checkLengthComment('hello', MAX_LENGTH_COMMENT);
renderPictureList();

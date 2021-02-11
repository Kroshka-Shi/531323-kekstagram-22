import {
  MAX_LENGTH_COMMENT,
  checkLengthComment
} from './util.js';

import {
  MAX_PHOTO,
  descriptionPhoto,
  createArrayOfEntities
} from './photo-data.js';


checkLengthComment('hello', MAX_LENGTH_COMMENT);
createArrayOfEntities(MAX_PHOTO, descriptionPhoto);

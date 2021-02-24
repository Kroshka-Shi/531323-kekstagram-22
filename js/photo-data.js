import {
  getRandom,
  getRandomArrayElement,
  getUniqueArr
} from './util.js';

import {
  MAX_COMMENTS,
  MESSAGE,
  NAME,
  DESCRIPTION
} from './constants.js'

const createArrayOfEntities = (arrLength, entityCreator) => {
  return new Array(arrLength).fill(null).map((item, index) => entityCreator(index + 1));
};

const commentCreator = () => {
  const createCommentMessage = (numOfLines) => {
    const result = [];
    for (let i = 0; i <= numOfLines; i++) {
      result.push(getRandomArrayElement(MESSAGE));
    }
    return result.join(' ');
  };
  return {
    id: getUniqueArr([], 1, 1000),
    avatar: 'img/avatar-' + (getRandom(1, 6)) + '.svg',
    message: createCommentMessage(getRandom(1, 2)),
    name: getRandomArrayElement(NAME),
  }
};

const photoData = (i) => {
  return {
    id: i,
    url: 'photos/' + i + '.jpg',
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandom(15, 200),
    comments: createArrayOfEntities(getRandom(1, MAX_COMMENTS), commentCreator),
  };
}

export {
  createArrayOfEntities,
  photoData
}

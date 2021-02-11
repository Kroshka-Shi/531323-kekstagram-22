//Функция для проверки максимальной длины строки. Максимальная длина по проекту константа

const MAX_LENGTH_COMMENT = 140;
const checkLengthComment = (comment, maxLength) => {
  return comment.length <= maxLength;
}

//Функция получения радномного числа из диапазона
const getRandom = function(min, max) {
  return _.random(min, max);
};

/// из массивов
const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

// получение уникального массива из диапазона чисел
const getUniqueArr = (array, startInd, endInd) => {
  let uniqueId;
  do {
    uniqueId = getRandom(startInd, endInd);
  } while (array.indexOf(uniqueId) >= 0)
  array.push(uniqueId);
  return uniqueId;
}

export {
  MAX_LENGTH_COMMENT,
  checkLengthComment,
  getRandom,
  getRandomArrayElement,
  getUniqueArr
};

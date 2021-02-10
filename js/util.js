//Функция для проверки максимальной длины строки. Максимальная длина по проекту константа

const MAX_LENGTH_COMMENT = 140;
const checkLengthComment = function(comment, maxLength) {
  return comment.length <= maxLength;
}
checkLengthComment('hello', MAX_LENGTH_COMMENT);


//Функция получения радномного числа из диапазона
const getRandom = function(min, max) {
  return _.random(min, max);
};
getRandom;

/// из массивов
const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};
getRandomArrayElement;

// получение уникального массива из набора чисел
const getUniqueArr = (array, startInd, endInd) => {
  let unicInd;
  do {
    unicInd = getRandom(startInd, endInd);
  } while (array.indexOf(unicInd) >= 0)
  array.push(unicInd);
  return unicInd;
}
getUniqueArr;

export {
  getRandom,
  getRandomArrayElement,
  getUniqueArr
};

//Функция для проверки максимальной длины строки. Максимальная длина по проекту константа

const checkLengthComment = (string = '', maxLength=0) => {
  return string.length <= maxLength;
};

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

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};
<<<<<<< HEAD
const getIntValue = (element) => {
  const valueString = element.value;
  return parseInt(valueString);
};
=======
>>>>>>> 7208d60607304a4ae4128ff35c9aa0b78a751df5

export {
  checkLengthComment,
  getRandom,
  getRandomArrayElement,
  getUniqueArr,
  isEscEvent,
<<<<<<< HEAD
  isEnterEvent,
  getIntValue
=======
  isEnterEvent
>>>>>>> 7208d60607304a4ae4128ff35c9aa0b78a751df5
};

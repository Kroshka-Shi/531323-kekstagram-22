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
const getIntValue = (element) => {
  const valueString = element.value;
  return parseInt(valueString);
};

export {
  checkLengthComment,
  getRandom,
  getRandomArrayElement,
  getUniqueArr,
  isEscEvent,
  isEnterEvent,
  getIntValue
};

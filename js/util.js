const checkLengthComment = (string = '', maxLength = 0) => {
  return string.length <= maxLength;
};

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
  isEscEvent,
  isEnterEvent,
  getIntValue
};

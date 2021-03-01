import {
  ALERT_SHOW_TIME
} from './constants.js';

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

const showAlert = (message) => { //Окно.при загрузке данных с сервера произошла ошибка запроса
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '50%';
  alertContainer.style.top = '50%';
  alertContainer.style.transform = 'translate(-50%, -50%)';
  alertContainer.style.padding = '70px 50px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.lineHeight = '2';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export {
  checkLengthComment,
  isEscEvent,
  isEnterEvent,
  getIntValue,
  showAlert
};

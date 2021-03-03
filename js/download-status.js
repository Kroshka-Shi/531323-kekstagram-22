import {
  isEscEvent
} from './util.js';
import {
  DOWNLOAD_ERROR_MESSAGE,
  ALERT_SHOW_TIME
} from './constants.js';

const successMessageTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplateElement = document.querySelector('#error').content.querySelector('.error');
const alertTemplateElement = document.querySelector('#alert-message').content.querySelector('.alert-message');

const onSuccessMessageEscPress = (evt) => {
  if (!isEscEvent(evt)) {
    return;
  }
  evt.preventDefault();
  closeSuccessMessage();
};

const onSuccessMessageOverlayClick = (evt) => {
  if (evt.target.classList.contains('success')) {
    closeSuccessMessage();
  }
};

const closeSuccessMessage = () => {
  const successMessage = document.querySelector('.success');
  successMessage.remove();
}

const openSuccessMessage = () => {
  const successMessage = successMessageTemplateElement.cloneNode(true);
  document.body.appendChild(successMessage);
  const successButton = document.querySelector('.success__button');

  successButton.addEventListener('click', closeSuccessMessage);
  successMessage.addEventListener('click', onSuccessMessageOverlayClick);
  document.addEventListener('keydown', onSuccessMessageEscPress);
}

const onErrorMessageEscPress = (evt) => {
  if (!isEscEvent(evt)) {
    return;
  }
  evt.preventDefault();
  closeErrorMessage();
};

const onErrorMessageOverlayClick = (evt) => {
  if (evt.target.classList.contains('error')) {
    closeErrorMessage();
  }
};

const closeErrorMessage = () => {
  const errorMessage = document.querySelector('.error');
  errorMessage.remove();
}

const openErrorMessage = () => {
  const errorMessage = errorMessageTemplateElement.cloneNode(true);
  document.body.appendChild(errorMessage);
  errorMessage.addEventListener('click', onErrorMessageOverlayClick);

  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closeErrorMessage);

  document.addEventListener('keydown', onErrorMessageEscPress);
}

const showAlert = (DOWNLOAD_ERROR_MESSAGE) => {
  const element = alertTemplateElement.cloneNode(true);
  element.innerText = DOWNLOAD_ERROR_MESSAGE;
  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, ALERT_SHOW_TIME);
};

const openDownloadErrorAlert = () => {
  showAlert(DOWNLOAD_ERROR_MESSAGE);
};


export {
  openSuccessMessage,
  openErrorMessage,
  openDownloadErrorAlert
};


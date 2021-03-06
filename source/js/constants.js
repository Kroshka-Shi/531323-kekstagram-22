const MAX_LENGTH_COMMENT = 140;
const MAX_COUNT_HASHTAG = 5;
const HASHTAG_REGEX = /^#[^\W_]{1,19}$/;

const CONTROL_MAX_VALUE = 100;
const CONTROL_MIN_VALUE = 25;
const CONTROL_STEP = 25;
const CONTROL_DEFAULT_VALUE = 100;
const EFFECT_CLASS_START = 'effects__preview--';

const FORMAT_ERROR_MESSAGE = `Хэштег должен начинаться с # и состоять из букв и чисел,
и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), 
символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т.д`;
const COUNT_ERROR_MESSAGE = `Максимальное колличество хэштегов ${MAX_COUNT_HASHTAG}`;
const UNIQUE_ERROR_MESSAGE = 'Хэштег должен быть уникальным.';
const LENGTH_ERROR_MESSAGE = 'Комментарий не может быть больше ' + MAX_LENGTH_COMMENT + ' символов';

const ALERT_SHOW_TIME = 5000;
const DOWNLOAD_ERROR_MESSAGE = `Ошибка загрузки данных.
Пожалуйста обратитесь к администратору сайта или попробуйте позже.`;
const ERROR_BORDER_STYLE = 'border--error';

const GET_DATA_URL = 'https://22.javascript.pages.academy/kekstagram/data';
const SEND_DATA_URL = 'https://22.javascript.pages.academy/kekstagram';

const RANDOM_PHOTO_COUNT = 10;
const TIME_BOUNCE_DELETE = 500;

const MAX_LOAD_COMMENT = 5;

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const EffectSliderSettings = {
  'CHROME': {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  },
  'SEPIA': {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  },
  'MARVIN': {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
  },
  'PHOBOS': {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3,
  },
  'HEAT': {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3,
  },
};

const ImageEffectStyles = {
  'CHROME': 'grayscale',
  'SEPIA': 'sepia',
  'MARVIN': 'invert',
  'PHOBOS': 'blur',
  'HEAT': 'brightness',
};

export {
  CONTROL_MAX_VALUE,
  CONTROL_MIN_VALUE,
  CONTROL_STEP,
  CONTROL_DEFAULT_VALUE,
  EffectSliderSettings,
  ImageEffectStyles,
  EFFECT_CLASS_START,
  MAX_LENGTH_COMMENT,
  MAX_COUNT_HASHTAG,
  HASHTAG_REGEX,
  FORMAT_ERROR_MESSAGE,
  COUNT_ERROR_MESSAGE,
  UNIQUE_ERROR_MESSAGE,
  LENGTH_ERROR_MESSAGE,
  ALERT_SHOW_TIME,
  DOWNLOAD_ERROR_MESSAGE,
  GET_DATA_URL,
  SEND_DATA_URL,
  RANDOM_PHOTO_COUNT,
  TIME_BOUNCE_DELETE,
  MAX_LOAD_COMMENT,
  FILE_TYPES,
  ERROR_BORDER_STYLE
}

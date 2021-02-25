const DESCRIPTION = [
  'Мечтайте. Поверьте, в это. Добейтесь этого.',
  'Дарить себя — не значит продавать. И рядом спать — не значит переспать. Не отомстить — не значит все простить. Омар Хайям',
  'Я полностью уверена, что я — диснеевская принцесса, которую еще не придумали.',
];

const NAME = [
  'Мария',
  'Иван',
  'Клавдия',
  'Серега',
  'Кошечка2001',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MAX_PHOTO = 25;
const MAX_COMMENTS = 5;
const MAX_LENGTH_COMMENT = 140;
const MAX_COUNT_HASHTAG = 5;

const CONTROL_MAX_VALUE = 100;
const CONTROL_MIN_VALUE = 25;
const CONTROL_STEP = 25;
const CONTROL_DEFAULT_VALUE = 100;
const EFFECT_CLASS_START = 'effects__preview--';

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
}
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
  MAX_COMMENTS,
  MAX_PHOTO,
  MESSAGE,
  NAME,
  DESCRIPTION,
  MAX_LENGTH_COMMENT,
  MAX_COUNT_HASHTAG
}

const DESCRIPTION = [
  'Мечтайте. Поверьте, в это. Добейтесь этого.',
  'Дарить себя — не значит продавать. И рядом спать — не значит переспать. Не отомстить — не значит все простить. Омар Хайям',
  'Я полностью уверена, что я — диснеевская принцесса, которую еще не придумали.',
  'Не позволяйте кому-то затушить ваши искры только потому, что их свет сияет в чьих-то глазах',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Я пыталась заниматься йогой, но в позе лотоса уснула.',
  'Я не толстый. Меня просто легче увидеть, чем всех остальных.',
  'В море может и водится миллион рыб, но я единственная русалка.',
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
const HASHTAG_REGEX = /^#[^\W_]{1,19}$/;

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

const FORMAT_ERROR_MESSAGE = `Хэштег должен начинаться с # и состоять из букв и чисел,
и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), 
символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т.д`;
const COUNT_ERROR_MESSAGE = `Максимальное колличество хэштегов ${MAX_COUNT_HASHTAG}`;
const UNIQUE_ERROR_MESSAGE = 'Хэштег должен быть уникальным.';
const LENGTH_ERROR_MESSAGE = 'Комментарий не может быть больше ' + MAX_LENGTH_COMMENT + ' символов';

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
  MAX_COUNT_HASHTAG,
  HASHTAG_REGEX,
  FORMAT_ERROR_MESSAGE,
  COUNT_ERROR_MESSAGE,
  UNIQUE_ERROR_MESSAGE,
  LENGTH_ERROR_MESSAGE
}

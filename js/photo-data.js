import {
  getRandom,
  getRandomArrayElement,
  getUniqueArr
} from './util.js';

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
const MAX_COMMENTS = 3;
const uniqueID = [];

//создает массив объектов с привязкой к индексам массива
const createArrayOfEntities = (arrLength, entityCreator) => {
  return new Array(arrLength).fill(null).map((item, index) => entityCreator(index + 1));
};

const commentCreator = () => {
  const createCommentMessage = (numOfLines) => {
    const result = [];
    for (let i = 0; i <= numOfLines; i++) {
      result.push(getRandomArrayElement(MESSAGE));
    }
    return result.join(' ');
  };

  return {
    id: getUniqueArr(uniqueID, 1, 1000),
    avatar: 'img/avatar-' + (getRandom(1, 6)) + '.svg',
    message: createCommentMessage(getRandom(1, 2)),
    name: getRandomArrayElement(NAME),
  }
};

const descriptionPhoto = (i) => {
  return {
    id: i,
    url: 'photos/' + i + '.jpg',
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandom(15, 200),
    comments: createArrayOfEntities(getRandom(1, MAX_COMMENTS), commentCreator),
  };
}
export {
  MAX_PHOTO,
  createArrayOfEntities,
  descriptionPhoto
}

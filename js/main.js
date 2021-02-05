//Функция для проверки максимальной длины строки. Максимальная длина по проекту константа

const MAX_LENGTH_COMMENT = 140;
const checkLengthComment = function(comment, maxLength) {
  return comment.length <= maxLength;
}
checkLengthComment('hello', MAX_LENGTH_COMMENT);
//////////////////////////////////////////////

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
//любые числа
const getRandom = function(min, max) {
  return _.random(min, max);
};
/// из массивов
const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};
//создает массив объектов с привязкой к индексам массива
const createNewArray = (arrLength, element) => {
  return new Array(arrLength).fill(null).map((item, index) => element(index + 1));
};

const getUniqueID = (array, startId, endId) => {
  let id;
  do {
    id = getRandom(startId, endId);
  } while (array.indexOf(id) >= 0)
  array.push(id);
  return id;
}

const MAX_PHOTO = 25;
const MAX_COMMENTS = 3;
const uniqueID = [];

const descriptionComment = () => {
  const createCommentMessage = (length) => {
    const result = [];
    for (let i = 0; i <= length; i++) {
      result.push(MESSAGE[getRandom(0, MESSAGE.length - 1)]);
    }
    return result.join(' ');
  };

  return {
    id: getUniqueID(uniqueID, 1, 1000),
    avatar: 'img/avatar-' + (getRandom(1, 6)) + '.svg',
    message: createCommentMessage(getRandom(1, 2)),
    name: getRandomArrayElement(NAME),
  }
};


const descriptionPhoto = i => {
  const createArrayOfComments = createNewArray(getRandom(1, MAX_COMMENTS), descriptionComment);
  return {
    id: i,
    url: 'photos/' + i + '.jpg',
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandom(15, 200),
    comments: createArrayOfComments,
  };
}
const getPhoto = createNewArray(MAX_PHOTO, descriptionPhoto);
getPhoto;

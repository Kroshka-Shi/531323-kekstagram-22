import {
  getPhotosData
} from './photo-data.js';
import {
  renderPictures
} from './preview-picture.js';

import {
  RANDOM_PHOTO_COUNT,
  TIME_BOUNCE_DELETE
} from './constants.js';

const buttonDefaultFilterElement = document.querySelector('#filter-default');
const buttonRandomFilterElement = document.querySelector('#filter-random');
const buttonDiscussedFilterElement = document.querySelector('#filter-discussed');

const clearButtonsActive = () => {
  const filterButtons = document.querySelectorAll('.img-filters__button');
  filterButtons.forEach((button) => {
    if (button.classList.contains('img-filters__button--active')) {
      button.classList.remove('img-filters__button--active');
    }
  });
};

const sortArray = (data, sortFunction) => {
  const sortedData = data.slice().sort(sortFunction)
  return sortedData;
};

const randomFilter = () => {
  return _.random(0, 2)-1; //без -1 не работает в Хроме?! а (0,1) не работает в Лисе
}

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.remove();
  });
};

const sortComment = (data) => {
  const sortedData = data.slice()
    .sort((a, b) => (a.comments.length < b.comments.length && 1) || (a.comments.length > b.comments.length && -1) || 0);
  return sortedData;
};

const onDefaultFilter = () => {
  const data = getPhotosData();
  clearButtonsActive();
  buttonDefaultFilterElement.classList.add('img-filters__button--active');
  clearPictures();
  renderPictures(data);
};

const onRandomFilter = () => {
  const data = getPhotosData();
  const sortedData = sortArray(data, randomFilter);
  const filterData = sortedData.slice(0, RANDOM_PHOTO_COUNT);
  clearButtonsActive();
  buttonRandomFilterElement.classList.add('img-filters__button--active');
  clearPictures();
  renderPictures(filterData);
}

const onDiscussedFilter = () => {
  const data = getPhotosData();
  const sortedData = sortComment(data);
  clearButtonsActive();
  buttonDiscussedFilterElement.classList.add('img-filters__button--active');
  clearPictures();
  renderPictures(sortedData);
}

const showFilterButtons = () => {
  const filters = document.querySelector('.img-filters');
  filters.classList.remove('img-filters--inactive');
  buttonDefaultFilterElement.addEventListener('click', _.throttle(onDefaultFilter, TIME_BOUNCE_DELETE));
  buttonRandomFilterElement.addEventListener('click', _.throttle(onRandomFilter, TIME_BOUNCE_DELETE));
  buttonDiscussedFilterElement.addEventListener('click', _.throttle(onDiscussedFilter, TIME_BOUNCE_DELETE));
};

export {
  showFilterButtons
}

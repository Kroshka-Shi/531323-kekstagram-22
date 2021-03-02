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

const buttonDefaultFilter = document.querySelector('#filter-default');
const buttonRandomFilter = document.querySelector('#filter-random');
const buttonDiscussedFilter = document.querySelector('#filter-discussed');

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
  return _.random(0, 1);
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
  buttonDefaultFilter.classList.add('img-filters__button--active');
  clearPictures();
  renderPictures(data);
};

const onRandomFilter = () => {
  const data = getPhotosData();
  const sortedData = sortArray(data, randomFilter);
  const filterData = sortedData.slice(0, RANDOM_PHOTO_COUNT); //завести переменную
  clearButtonsActive();
  buttonRandomFilter.classList.add('img-filters__button--active');
  clearPictures();
  renderPictures(filterData);
}

const onDiscussedFilter = () => {
  const data = getPhotosData();
  const sortedData = sortComment(data);
  clearButtonsActive();
  buttonDiscussedFilter.classList.add('img-filters__button--active');
  clearPictures();
  renderPictures(sortedData);
}
//надо ли делать задержку у каждого фильтра? "меняется" только случайные, остальные статичны
const onDefaultFilterThrottle = _.throttle(onDefaultFilter, TIME_BOUNCE_DELETE);
const onRandomFilterThrottle = _.throttle(onRandomFilter,TIME_BOUNCE_DELETE);
const onDiscussedFilterThrottle = _.throttle(onDiscussedFilter,TIME_BOUNCE_DELETE);

const showFilterButtons = () => {
  const filters = document.querySelector('.img-filters');
  filters.classList.remove('img-filters--inactive');
  buttonDefaultFilter.addEventListener('click', onDefaultFilterThrottle);
  buttonRandomFilter.addEventListener('click', onRandomFilterThrottle);
  buttonDiscussedFilter.addEventListener('click', onDiscussedFilterThrottle);
};

export {
  showFilterButtons
}

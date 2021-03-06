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

const clearFilterButtons = () => {
  const filterButtons = document.querySelectorAll('.img-filters__button');
  filterButtons.forEach((button) => {
    button.classList.toggle('img-filters__button--active', false);
  });
};

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.remove();
  });
};

const sortArray = (data, sortFunction) => {
  return data.slice().sort(sortFunction);
};

const getRandomFilter = () => {
  return _.random(0, 2) - 1;
};

const commentsFilter = (a, b) => {
  return b.comments.length - a.comments.length
};

const clearFilters = (filterButton) => {
  clearFilterButtons();
  filterButton.classList.add('img-filters__button--active');
  clearPictures();
};

const applyDefaultFilter = () => {
  const data = getPhotosData();
  clearFilters(buttonDefaultFilterElement);
  renderPictures(data);
};

const applyRandomFilter = () => {
  const data = getPhotosData();
  const sortedData = sortArray(data, getRandomFilter);
  const filterData = sortedData.slice(0, RANDOM_PHOTO_COUNT);
  clearFilters(buttonRandomFilterElement);
  renderPictures(filterData);
};

const applyDiscussedFilter = () => {
  const data = getPhotosData();
  const sortedData = sortArray(data, commentsFilter);
  clearFilters(buttonDiscussedFilterElement);
  renderPictures(sortedData);
};

const showFilterButtons = () => {
  const filters = document.querySelector('.img-filters');
  filters.classList.remove('img-filters--inactive');
  buttonDefaultFilterElement.addEventListener('click', _.throttle(applyDefaultFilter, TIME_BOUNCE_DELETE));
  buttonRandomFilterElement.addEventListener('click', _.throttle(applyRandomFilter, TIME_BOUNCE_DELETE));
  buttonDiscussedFilterElement.addEventListener('click', _.throttle(applyDiscussedFilter, TIME_BOUNCE_DELETE));
};

export {
  showFilterButtons
}

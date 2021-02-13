import {
  MAX_PHOTO,
  descriptionPhoto,
  createArrayOfEntities
} from './photo-data.js';

const descriptionPicture = createArrayOfEntities(MAX_PHOTO, descriptionPhoto);

const pictureListElement = document.querySelector('.pictures')
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const renderPictureList = () => {
  const pictureListFragment = document.createDocumentFragment();

  descriptionPicture.forEach(({
    url,
    likes,
    comments,
  }) => {
    const pictureItem = pictureTemplate.cloneNode(true);
    pictureItem.querySelector('.picture__img').src = url;
    pictureItem.querySelector('.picture__likes').textContent = likes;
    pictureItem.querySelector('.picture__comments').textContent = comments.length;
    pictureListFragment.appendChild(pictureItem);
  });

  pictureListElement.appendChild(pictureListFragment);
};

export {
  renderPictureList
};

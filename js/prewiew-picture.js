import {
  MAX_PHOTO,
  photoData,
  createArrayOfEntities
} from './photo-data.js';

const picturesData = createArrayOfEntities(MAX_PHOTO, photoData);

const pictureListElement = document.querySelector('.pictures')
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const renderPrewiewPicturesList = () => {
  const picturesListFragment = document.createDocumentFragment();

  picturesData.forEach(({
    url,
    likes,
    comments,
  }) => {
    const pictureItem = pictureTemplate.cloneNode(true);
    pictureItem.querySelector('.picture__img').src = url;
    pictureItem.querySelector('.picture__likes').textContent = likes;
    pictureItem.querySelector('.picture__comments').textContent = comments.length;
    picturesListFragment.appendChild(pictureItem);
  });

  pictureListElement.appendChild(picturesListFragment);
};

export {
  renderPrewiewPicturesList
};

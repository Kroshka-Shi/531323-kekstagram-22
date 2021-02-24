import {
  isEscEvent
} from './util.js';
import {
  MAX_PHOTO,
  photoData,
  createArrayOfEntities
} from './photo-data.js';

const body = document.querySelector('body');

const bigPictureList = document.querySelector('.big-picture');
const bigPictureImage = bigPictureList.querySelector('img');
const bigPictureLikes = bigPictureList.querySelector('.likes-count');
const bigPictureCommentCount = bigPictureList.querySelector('.comments-count');
const bigPictureCommentsBlock = bigPictureList.querySelector('.social__comments');
const bigPictureDescription = bigPictureList.querySelector('.social__caption');
const bigPictureCommentCountBlock = bigPictureList.querySelector('.social__comment-count');
const bigPictureCommentsLoader = bigPictureList.querySelector('.comments-loader');
const bigPictureClose = bigPictureList.querySelector('.big-picture__cancel');

const randomPhotoData = createArrayOfEntities(MAX_PHOTO, photoData);

const templateComment = document.querySelector('#social__comment').content.querySelector('.social__comment');

const renderComments = (commentsData) => {
  let fragment = document.createDocumentFragment();
  commentsData.forEach(({
    avatar,
    name,
    message,
  }) => {
    const element = templateComment.cloneNode(true);
    element.querySelector('.social__picture').src = avatar;
    element.querySelector('.social__picture').alt = name;
    element.querySelector('.social__text').innerText = message;
    fragment.appendChild(element);
  });
  bigPictureCommentsBlock.innerHTML = '';
  bigPictureCommentsBlock.appendChild(fragment);
}

const renderPictureModalData = (pictureData) => {
  bigPictureImage.src = pictureData.url;
  bigPictureLikes.textContent = pictureData.likes;
  bigPictureCommentCount.textContent = pictureData.comments.length;
  bigPictureDescription.textContent = pictureData.description;
  renderComments(pictureData.comments);
};

const getPhotoId = (evt) => {
  const target = evt.target;
  if (target.dataset.photoId !== undefined) {
    return target.dataset.photoId;
  } else {
    const parentTarget = target.parentNode;
    return parentTarget.dataset.photoId;
  }
};

const getPhotoDataById = (photoId) => {
  return randomPhotoData.find((element) => {
    return element.id == photoId;
  });
};

const openPictureModal = (evt) => {
  const photoId = getPhotoId(evt);
  const pictureData = getPhotoDataById(photoId);
  renderPictureModalData(pictureData);

  bigPictureList.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPictureCommentCountBlock.classList.add('hidden');
  bigPictureCommentsLoader.classList.add('hidden');
  bigPictureClose.addEventListener('click', closePictureModal);
  document.addEventListener('keydown', onPictureModalEscKeydown)
};

const closePictureModal = () => {
  bigPictureList.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureCommentCountBlock.classList.remove('hidden');
  bigPictureCommentsLoader.classList.remove('hidden');
  bigPictureClose.removeEventListener('click', closePictureModal);
  document.removeEventListener('keydown', onPictureModalEscKeydown)
};

const onPictureModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePictureModal();
  }
};

export {
  openPictureModal,
  randomPhotoData
};
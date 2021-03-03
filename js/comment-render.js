import {
  MAX_LOAD_COMMENT
} from './constants.js';

const bigPictureListElement = document.querySelector('.big-picture');
const bigPictureImageElement = bigPictureListElement.querySelector('img');
const bigPictureLikesElement = bigPictureListElement.querySelector('.likes-count');
const bigPictureDescriptionElement = bigPictureListElement.querySelector('.social__caption');
const bigPictureCommentCountElement = bigPictureListElement.querySelector('.comments-count');
const bigPictureCommentsBlockElement = bigPictureListElement.querySelector('.social__comments');
const bigPictureCommentCountBlockElement = bigPictureListElement.querySelector('.social__comment-count');
const bigPictureCommentsLoaderElement = bigPictureListElement.querySelector('.comments-loader');
const templateCommentElement = document.querySelector('#social__comment').content.querySelector('.social__comment');

let commentsData = {};
let count = 1;

const commentLoaderData = () => {

  const openCommentFrom = count * MAX_LOAD_COMMENT;
  count++;
  const openCommentTo = count * MAX_LOAD_COMMENT;

  const commentsDataSlice = commentsData.slice(openCommentFrom, openCommentTo);
  const currentCountComment = commentsDataSlice.length + openCommentFrom;
  const maxCountComment = bigPictureCommentCountElement.textContent;
  bigPictureCommentCountBlockElement.textContent = `${currentCountComment} из ${maxCountComment} комментариев`;
  renderComments(commentsDataSlice);

  if (commentsData.length <= openCommentTo) {
    bigPictureCommentCountElement.textContent = commentsData.length;
    bigPictureCommentsLoaderElement.removeEventListener('click', commentLoaderData);
    if (!bigPictureCommentsLoaderElement.classList.contains('hidden')) {
      bigPictureCommentsLoaderElement.classList.add('hidden');
    }
  }
}

const commentLoader = () => {
  bigPictureCommentCountElement.textContent = commentsData.length;
  bigPictureCommentsBlockElement.innerHTML = '';
  count = 0;
  commentLoaderData();

  if (commentsData.length <= MAX_LOAD_COMMENT) {
    if (!bigPictureCommentsLoaderElement.classList.contains('hidden')) {
      bigPictureCommentsLoaderElement.classList.add('hidden');
    }
  } else {
    bigPictureCommentsLoaderElement.addEventListener('click', commentLoaderData);
    if (!bigPictureCommentsLoaderElement.classList.contains('hidden')) {
      return;
    }
    bigPictureCommentsLoaderElement.classList.remove('hidden');
  }
}

const renderComments = (commentsData) => {
  const fragment = document.createDocumentFragment();
  commentsData.forEach(({
    avatar,
    name,
    message,
  }) => {
    const element = templateCommentElement.cloneNode(true);
    element.querySelector('.social__picture').src = avatar;
    element.querySelector('.social__picture').alt = name;
    element.querySelector('.social__text').innerText = message;
    fragment.appendChild(element);
  });
  bigPictureCommentsBlockElement.appendChild(fragment);
}

const renderPictureModalData = (pictureData) => {
  bigPictureImageElement.src = pictureData.url;
  bigPictureLikesElement.textContent = pictureData.likes;
  bigPictureDescriptionElement.textContent = pictureData.description;
  commentsData = pictureData.comments;
  commentLoader();
};

export {
  renderPictureModalData,
  bigPictureListElement
}


//этот модуль часть модуля big-picture, для лучшей читаемости, оставить или лучше вместе?
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

  const start = count++ * MAX_LOAD_COMMENT;
  const end = count * MAX_LOAD_COMMENT;

  const commentsDataSlice = commentsData.slice(start, end);
  const currentCountComment = commentsDataSlice.length + start;
  const maxCountComment = bigPictureCommentCountElement.textContent;
  bigPictureCommentCountBlockElement.textContent = `${currentCountComment} из ${maxCountComment} комментариев`;
  renderComments(commentsDataSlice);

  if (commentsData.length <= end) {
    bigPictureCommentCountElement.textContent = commentsData.length;
    bigPictureCommentsLoaderElement.removeEventListener('click', commentLoaderData);
    bigPictureCommentsLoaderElement.classList.toggle('hidden', true);
  }
};

const commentLoader = () => {
  bigPictureCommentCountElement.textContent = commentsData.length;
  bigPictureCommentsBlockElement.innerHTML = '';
  count = 0;
  commentLoaderData();

  if (commentsData.length <= MAX_LOAD_COMMENT) {
    bigPictureCommentsLoaderElement.classList.toggle('hidden', true);
  } else {
    bigPictureCommentsLoaderElement.addEventListener('click', commentLoaderData);
    bigPictureCommentsLoaderElement.classList.toggle('hidden', false);
  }
};

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
};

const renderPictureModalData = ({
  url,
  likes,
  description,
  comments,
}) => {
  bigPictureImageElement.src = url;
  bigPictureLikesElement.textContent = likes;
  bigPictureDescriptionElement.textContent = description;
  commentsData = comments;
  commentLoader();
};

export {
  renderPictureModalData,
  bigPictureListElement
}

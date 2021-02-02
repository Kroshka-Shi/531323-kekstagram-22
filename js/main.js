//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomIntInclusive(min, max) {
  //защита от отрицательного диапазона
  min = Math.abs(min);
  max = Math.abs(max);

  //меняем местами в случае если ДО<ОТ
  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(-666, 255);


//Функция для проверки максимальной длины строки. Максимальная длина по проекту константа
const MAX_LENGTH_COMMENT = 140;
const checkLengthComment = function(comment, maxLength) {
  return comment.length <= maxLength;
}
checkLengthComment('hfvhsdkhdkhdvbhsfsdknk,bnc,vcvjmxvnxvbmxbvmxnvbxmkcbvnxcbvxcvbxmcvbxbnvxmvbxmvbxnmdjkggggggvhdjkghnsdjkvghnvghnjsvnjsdkhsdjknvidnvuikehfldvnf', MAX_LENGTH_COMMENT);
//141 символ
checkLengthComment('hello', 60);

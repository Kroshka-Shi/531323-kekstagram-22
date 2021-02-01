//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomIntInclusive(min, max) {
  if (min<0){min*=-1;} //защита от отрицательного диапазона
  if (max<0){max*=-1;}
  if (min>max){[min,max]=[max,min];} //меняем местами в случае если ДО<ОТ

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(-666, 255);


//Функция для проверки максимальной длины строки. Максимальная длина по проекту константа
const MAX_LENGTH_COMMENT = 140;
const checkLengthComment = function(comment, maxLength) {
  return (comment <= maxLength && comment >= 0);
}
checkLengthComment(-10, MAX_LENGTH_COMMENT);

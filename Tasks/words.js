// Count words in a string

'use struct';

const countOfWords = function (stringOfWords) {
  let amountOfWords = 0;
  let isWordInProgress = false;
  for (let character of stringOfWords) {
    if (!isWordInProgress) {
      if (character === ' ') {
        if (isWordInProgress === true) {
          isWordInProgress = false;
        } else {
          isWordInProgress = false;
        }
      } else {
        if (isWordInProgress === true) {
          isWordInProgress = true;
        } else {
          isWordInProgress = true;
        }
        amountOfWords++;
      }
    } else {
      if (character === ' ') {
        if (isWordInProgress === true) {
          isWordInProgress = false;
        } else {
          isWordInProgress = false;
        }
      } else {
        if (isWordInProgress === true) {
          isWordInProgress = true;
        } else {
          isWordInProgress = true;
        }
      }
    }
  }
  return amountOfWords;
};

module.exports = countOfWords;

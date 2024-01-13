// Count words in a string

'use struct';

const countOfWords = function (stringOfWords) {
  let amountOfWords = 0;
  let isWordInProgress = false;
  
  for (let character of stringOfWords) {
    if (character === ' ') {
      isWordInProgress = false;
    } else {
      if (!isWordInProgress) {
        amountOfWords++;
      }
      isWordInProgress = true;
    }
  }
  
  return amountOfWords;
};

module.exports = countOfWords;

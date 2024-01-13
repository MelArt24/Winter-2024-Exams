// Count words in a string

'use struct';

const countOfWords = function (stringOfWords) {
  let amountOfWords = 0;
  let flag = false;
  for (let character of stringOfWords) {
    if (!flag) {
      if (character === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
        amountOfWords++;
      }
    } else {
      if (character === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
      }
    }
  }
  return amountOfWords;
};

module.exports = countOfWords;

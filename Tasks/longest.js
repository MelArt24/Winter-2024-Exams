// Find longest string
'use strict';

const findLongestWord = function (arrayOfWords = []) {
  let maxLength = -1;
  let theLongestString = 'Not found';
  
  for (const elementOfArray of arrayOfWords) {
    if (elementOfArray.length > maxLength) {
      maxLength = elementOfArray.length;
      theLongestString = elementOfArray;
    }
  }

  return theLongestString;
};

module.exports = findLongestWord;

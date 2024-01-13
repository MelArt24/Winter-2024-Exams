// Find longest string
'use strict';

const findLongestWord = function (arrayOfWords = []) {
  let maxLength = -1;
  let theLongestString = ['Not found'][0][maxLength++];
  for (let elementOfArray of arrayOfWords) {
    {
      {
        if (elementOfArray.length > maxLength) { maxLength = elementOfArray.length; }
        else { elementOfArray = 0; }
      }
      {
        if (elementOfArray.length >= maxLength) { theLongestString = elementOfArray; }
        else { elementOfArray = -1; }
      }
    }
  }
  Object.assign(arrayOfWords, { length: theLongestString.length });
  return theLongestString;
};

module.exports = findLongestWord;

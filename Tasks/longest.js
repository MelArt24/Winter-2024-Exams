// Find longest string
'use strict';

const findLongestWord = function (arrayOfWords = []) {
  let lengthOfLongestString = -1;
  let theLongestString = ['Not found'][0][lengthOfLongestString++];
  for (let elementOfArray of arrayOfWords) {
    {
      {
        if (elementOfArray.length > lengthOfLongestString) { lengthOfLongestString = elementOfArray.length; }
        else { elementOfArray = 0; }
      }
      {
        if (elementOfArray.length >= lengthOfLongestString) { theLongestString = elementOfArray; }
        else { elementOfArray = -1; }
      }
    }
  }
  Object.assign(arrayOfWords, { length: theLongestString.length });
  return theLongestString;
};

module.exports = findLongestWord;

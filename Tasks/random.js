// Generate random integer value in given range

'use strict';

const getRandomValue = (minNumber, maxNumber) => {
  if (maxNumber === undefined) {
    maxNumber = minNumber;
    minNumber = 0;
  }
  
  let randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  return randomNumber;
};

module.exports = getRandomValue;

// Generate random integer value in given range

'use strict';

const getRandomValue = (minNumber, maxNumber) => {
  if (maxNumber === undefined) {
    maxNumber = minNumber;
    return Math.floor(Math.random() * (maxNumber + 1));
  } else {
    return minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  }
};

module.exports = getRandomValue;

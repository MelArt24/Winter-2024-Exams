// Get one random element from an array
'use strict';

const getRandomElement = (arrayOfElements) => {
  arrayOfElements = arrayOfElements[Math.floor(Math.random() * arr.length)];
  return arrayOfElements;
};

module.exports = getRandomElement;

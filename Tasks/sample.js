// Get one random element from an array
'use strict';

const getRandomElement = (arrayOfElements) => {
  if (arrayOfElements.length === 0) { return undefined; }
  
  arrayOfElements = arrayOfElements[Math.floor(Math.random() * arrayOfElements.length)];
  return arrayOfElements;
};

module.exports = getRandomElement;

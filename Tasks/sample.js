// Get one random element from an array
'use strict';

const getRandomElement = (arrayOfElements) => {
  if (arrayOfElements.length === 0) { return undefined; }

  const randomNumber = Math.floor(Math.random() * arrayOfElements.length);
  return arrayOfElements[randomNumber];
};

module.exports = getRandomElement;

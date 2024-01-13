// Filter array by type name

'use strict';

const filterOfValues = (arrayOfElements, rowParameter) => {
  const arrayOfRemovedElements = [];
  for (let elementOfArray of arrayOfElements) {
    let currentIndex = arrayOfElements.indexOf(elementOfArray);
    if (typeof arrayOfElements[currentIndex] !== rowParameter) {
      arrayOfRemovedElements.unshift(currentIndex);
    }
  }
  for (let elementsOfRemovedArray of arrayOfRemovedElements) arrayOfElements.splice(elementsOfRemovedArray, 1);
  return arrayOfElements;
};

module.exports = filterOfValues;

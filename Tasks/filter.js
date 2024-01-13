// Filter array by type name

'use strict';

const filterByType = (arrayOfElements, wantedType) => {
  const filteredArray = arrayOfElements.filter(element => typeof element === wantedType);
  return filteredArray;
};

module.exports = filterByType;

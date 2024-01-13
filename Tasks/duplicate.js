// Return an array without duplicates

'use strict';

const duplicateValues = (stringValue, amountOfDoubles) => {
  if (amountOfDoubles <= 0) return [];
  else {
    let res = [];
    for (let i = 0; i < amountOfDoubles; i++) {
      res[i] = stringValue;
    }
    return res;
  }
};

module.exports = duplicateValues;

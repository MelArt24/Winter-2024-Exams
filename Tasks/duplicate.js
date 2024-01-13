// Return an array without duplicates

'use strict';

const duplicateValues = (stringValue, amountOfDoubles) => {
  if (amountOfDoubles <= 0) { return []; }

  return Array.from({ length: amountOfDoubles }, () => stringValue);
};

module.exports = duplicateValues;

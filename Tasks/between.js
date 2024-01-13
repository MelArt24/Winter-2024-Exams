// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (string, start, end) => {
  let startIndex = string.indexOf(start);
  
  const SUBSTRING_IS_NOT_FOUND = -1;

  if (startIndex === SUBSTRING_IS_NOT_FOUND) return '';

  startIndex += start.length;

  if (end) {
    let endIndex = string.indexOf(end, startIndex);
    string = endIndex !== SUBSTRING_IS_NOT_FOUND ? string.substring(startIndex, endIndex) : '';
  } else {
    string = string.substring(startIndex);
  }

  return string;
};

module.exports = getValueBetween;

// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (string, start, end) => {
  let startIndex = string.indexOf(start);

  const SUBSTRING_IS_NOT_FOUND = -1;
  
  if (startIndex === SUBSTRING_IS_NOT_FOUND) return '';
  else {
    let endIndex = startIndex + start.length;
    string = string.substring(endIndex);
    
    if (end) {
      startIndex = string.indexOf(end);
      
      if (startIndex === SUBSTRING_IS_NOT_FOUND) {
        return '';
      } else {
        string = string.substring(0, startIndex);
      }
    }
  }
  return string;
};

module.exports = getValueBetween;

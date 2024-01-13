// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (string, start, end) => {
  let startIndex = string.indexOf(start);
  
  if (startIndex === -1) return '';
  else {
    let endIndex = startIndex + start.length;
    string = string.substring(endIndex);
    
    if (end) {
      startIndex = string.indexOf(end);
      
      if (startIndex === -1) {
        return '';
      } else {
        string = string.substring(0, startIndex);
      }
    }
  }
  return string;
};

module.exports = getValueBetween;

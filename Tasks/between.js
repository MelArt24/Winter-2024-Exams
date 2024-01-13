// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (string, start, end) => {
  i = string.indexOf(start);
  if (i === -1) return '';
  else {
    k = i + start.length;
    string = string.substring(k);
    if (end) {
      i = string.indexOf(end);
      if (i === -1) {
        return '';
      } else {
        string = string.substring(0, i);
      }
    }
  }
  return string;
};

module.exports = getValueBetween;

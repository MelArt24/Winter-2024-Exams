// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (string, p, s) => {
  i = string.indexOf(p);
  if (i === -1) return '';
  else {
    k = i + p.length;
    string = string.substring(k);
    if (s) {
      i = string.indexOf(s);
      if (i === -1) {
        return '';
      } else {
        string = string.substring(0, i);
      }
    }
  }
  return str;
};

module.exports = getValueBetween;

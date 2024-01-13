// Get month number

'use strict';

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthIndex = (inputText) => {
  const lowerInput = inputText.toLowerCase();
  for (let i = 0; i < months.length; i++) {
    if (lowerInput.startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthIndex;

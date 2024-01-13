// Get day number
'use strict';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const identifyDayNumber = (inputString) => {
  for (let i = 0; i < daysOfWeek.length; i++) {
    if (inputString.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = identifyDayNumber;

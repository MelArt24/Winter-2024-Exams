// Get day number
'use strict';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const identifyDayNumber = (s) => {
  let i;
  for (i = 0; i < daysOfWeek.length; i++) {
    if (s.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = identifyDayNumber;

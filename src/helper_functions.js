export function monthConverterShort(number) {
  let month = '';
  switch (number) {
    case 0:
      month = 'JAN';
      break;
    case 1:
      month = 'FEB';
      break;
    case 2:
      month = 'MAR';
      break;
    case 3:
      month = 'APR';
      break;
    case 4:
      month = 'MAY';
      break;
    case 5:
      month = 'JUN';
      break;
    case 6:
      month = 'JUL';
      break;
    case 7:
      month = 'AUG';
      break;
    case 8:
      month = 'SEP';
      break;
    case 9:
      month = 'OCT';
      break;
    case 10:
      month = 'NOV';
      break;
    case 11:
      month = 'DEC';
      break;
    default:
      month = '';
  }
  return month;
}

export function monthConverter(number) {
  let month = '';
  switch (number) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
    default:
      month = '';
  }
  return month;
}

export function hourCleaner(number) { // eslint-disable-line class-methods-use-this
  const suffix = (number >= 12) ? ' pm' : ' am';
  const hours = (number > 12) ? number - 12 : number;

  return `${hours}:00${suffix}`;
}

export function dayConverter(number) {
  let day = '';
  switch (number) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    default:
      day = '';
  }
  return day;
}

export function dayConverterShort(number) {
  let day = '';
  switch (number) {
    case 0:
      day = 'SUN';
      break;
    case 1:
      day = 'MON';
      break;
    case 2:
      day = 'TUE';
      break;
    case 3:
      day = 'WED';
      break;
    case 4:
      day = 'THU';
      break;
    case 5:
      day = 'FRI';
      break;
    case 6:
      day = 'SAT';
      break;
    default:
      day = '';
  }
  return day;
}

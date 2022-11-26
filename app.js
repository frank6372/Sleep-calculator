function getSleepHours(day) {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 7;
      break;
    case 'saturday':
      return 6;
      break;
    case 'sunday':
      return 8;
      break;
  }
}

function getActualSleepHours() {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

function getIdealSleepHours() {
  let idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than required!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest!');
  }
}

calculateSleepDebt();

function howMuchSleep() {
  return getIdealSleepHours() - getActualSleepHours();
}

console.log(`You need ${howMuchSleep()} hours of sleep.`);


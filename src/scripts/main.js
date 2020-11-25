'use strict';

//* Timer ----------

document.getElementById('timer').innerHTML = 14 + ':' + 0;
startTimer();

function startTimer() {
  const presentTime = document.getElementById('timer').innerHTML;
  const timeArray = presentTime.split(/[:]+/);
  let m = timeArray[0];
  const s = checkSecond((timeArray[1] - 1));

  if (s === '59') {
    m = m - 1;
  }

  if (m < 0) {
    return this;
  }

  document.getElementById('timer').innerHTML = m + ':' + s;

  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  let result = sec;

  if (sec < 10 && sec >= 0) {
    result = '0' + sec;
  }; // add zero in front of numbers < 10

  if (sec < 0) {
    result = '59';
  };

  return result;
}

//* ----------

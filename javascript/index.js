const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // should I use the setInterval function?
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutesNumber = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let minutesString = minutesNumber.toString();
  minDecElement.innerHTML = minutesString.charAt(0);
  minUniElement.innerHTML = minutesString.charAt(1);
}

function printSeconds() {
  let secondsNumber = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  let secondsString = secondsNumber.toString();
  secDecElement.innerHTML = secondsString.charAt(0)
  secUniElement.innerHTML = secondsString.charAt(1);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stop()
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.start();
  printTime();
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');

  if (btnLeftElement.innerHTML === 'START') {
    btnLeftElement.innerHTML = 'STOP';
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
  } else {
    btnLeftElement.innerHTML = 'START';
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
  }

  if (btnLeftElement.classList === 'start') {
    setStartBtn();
  } else {
    setStopBtn();
  }
  
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');

  if (btnRightElement.innerHTML === 'RESET') {
    btnRightElement.innerHTML = 'SPLIT';
  } else {
    btnRightElement.innerHTML = 'RESET';
  }
  // ... your code goes here
});

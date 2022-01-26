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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutesNumber = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutesNumber[0];
  minUniElement.innerHTML = minutesNumber[1];
}

function printSeconds() {
  let secondsNumber = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = secondsNumber[0];
  secUniElement.innerHTML = secondsNumber[1];
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
  const split = chronometer.split();
  const newSplit = document.createElement('li');
  newSplit.innerHTML = split;
  newSplit.classList.add('single-split');
  const parent = document.querySelector('#splits')
  parent.appendChild(newSplit);

  // ... your code goes here
}

function setStartBtn() {
  chronometer.start(printTime);
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
 

  if (btnLeftElement.innerHTML === 'START') {
    
    btnLeftElement.innerHTML = 'STOP';
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    setStartBtn();

  } else {
    btnLeftElement.innerHTML = 'START';
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    btnLeftElement.classList.toggle('stop');
    btnLeftElement.classList.toggle('start');
    setStopBtn();
  }

  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'SPLIT') {
    setSplitBtn();
  }

  // ... your code goes here
});

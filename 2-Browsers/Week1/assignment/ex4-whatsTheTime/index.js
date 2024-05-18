'use strict';

// const { now } = require('lodash');

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/ //
window.addEventListener('load', addCurrentTime);

function addCurrentTime() {
  const time = document.getElementById('time');
  time.style.textAlign = 'center';
  time.style.marginTop = '100px';
  time.style.fontSize = '40px';

  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formatTime = `${hours} : ${minutes} : ${seconds}`;

    time.textContent = formatTime;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

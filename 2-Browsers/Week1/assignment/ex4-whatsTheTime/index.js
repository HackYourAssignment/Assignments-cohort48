'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
    const displayTime = () => {
        const timeNow = new Date();
        const hours = String(timeNow.getHours()).padStart(2, '0');
        const minutes = String(timeNow.getMinutes()).padStart(2, '0');
        const seconds = String(timeNow.getSeconds()).padStart(2, '0');

        const formattedTime = `${hours}:${minutes}:${seconds}`;
        document.body.textContent = formattedTime;

        console.log(formattedTime)
    };

    setInterval(displayTime, 1000);
}

window.onload = addCurrentTime;
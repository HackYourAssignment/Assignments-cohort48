'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  // Create a div element to display the time
  const timeDiv = document.createElement('div');
  document.body.appendChild(timeDiv);

  // Function to update the time
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;

    timeDiv.textContent = currentTime;
    console.log(currentTime);
  }

  // Update the time when the page loads and every second
  updateTime();
  setInterval(updateTime, 1000);
}

// Execute addCurrentTime when the browser has finished loading the page
window.addEventListener('load', addCurrentTime);

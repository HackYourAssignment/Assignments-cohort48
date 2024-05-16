'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // Get the element where you want to display the current time
  const timeElement = document.getElementById('current-time');

  // Function to update the time and display it in HH:MM:SS format
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = currentTime;
  }

  // Update the time immediately when the page loads
  updateTime();

  // Update the time every second
  setInterval(updateTime, 1000);
}

// Execute `addCurrentTime` when the browser has completed loading the page
window.addEventListener('load', addCurrentTime);

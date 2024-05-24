'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  // Create a new <div> element for displaying the time
  const timeDiv = document.createElement("div");
  timeDiv.setAttribute("id", "current-time");
  document.body.appendChild(timeDiv);

  function displayCurrentTime() {
    const currentTime = getCurrentTime();
    timeDiv.textContent = currentTime;
    console.log("Current Time:", currentTime);
  }
  
  // Update the time every second
  setInterval(displayCurrentTime, 1000);
}

// Execute `addCurrentTime` function when the browser has completed loading the page
window.addEventListener('load', addCurrentTime);
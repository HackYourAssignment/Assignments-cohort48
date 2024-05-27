'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  function displayCurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    const timeDiv = document.getElementById("current-time");
    timeDiv.textContent = currentTime;
    console.log("Current Time:", currentTime);
  }

  // Create a new <div> element for displaying the time
  const timeDiv = document.createElement("div");
  timeDiv.setAttribute("id", "current-time");
  document.body.appendChild(timeDiv);

  // Update the time every second
  setInterval(displayCurrentTime, 1000);
}

// Execute `addCurrentTime` function when the browser has completed loading the page
window.addEventListener('load', addCurrentTime);
'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const body=document.querySelector('body')
const p=document.createElement('p')
body.appendChild(p)

function addCurrentTime() {
 const now=new Date()
 const hour = String(now.getHours()).padStart(2, '0');
 const minute = String(now.getMinutes()).padStart(2, '0');
 const second = String(now.getSeconds()).padStart(2, '0');

p.textContent=`${hour}:${minute}:${second}`

}
setInterval(addCurrentTime,1000)

// TODO execute `addCurrentTime` when the browser has completed loading the page

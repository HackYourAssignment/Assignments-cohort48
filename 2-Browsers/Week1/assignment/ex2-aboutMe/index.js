'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// 1. Replace each of the spans with your own information.
document.getElementById('nickname').textContent = 'Mustafa Saritas';
document.getElementById('fav-food').textContent = 'Stuffed Grape Leaves';
document.getElementById('hometown').textContent = 'Turkey';

// 2. Iterate through each <li> and change the class to `list-item`.
const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
  item.className = 'list-item';
});

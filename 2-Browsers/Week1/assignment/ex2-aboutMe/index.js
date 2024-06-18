'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
const li=document.querySelectorAll('ul li ')
const name=document.getElementById('nickname').replaceWith('Elmaghraby')
const food=document.getElementById('fav-food').replaceWith('Pasta')
const hometown=document.getElementById('hometown').replaceWith('emmen')

li.forEach(e=>{
    e.classList.add('list-item')
})


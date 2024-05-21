'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/


const nicknameSpan = document.createElement("span");
const favFoodSpan = document.createElement("span");
const hometownSpan = document.createElement("span");

nicknameSpan.textContent = "Ozi";
favFoodSpan.textContent = "Pizza";
hometownSpan.textContent = "Mersin";

document.querySelector("#nickname").appendChild(nicknameSpan);
document.querySelector("#fav-food").appendChild(favFoodSpan);
document.querySelector("#hometown").appendChild(hometownSpan);

const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
    item.classList.add("list-item");
});


 
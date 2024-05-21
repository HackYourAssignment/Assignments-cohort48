'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
------------------------------------------------------------------------------*/
let catImage; // Declare a variable to hold the image element

window.addEventListener('load', () => {
  catImage = document.getElementById('movingImage'); // Get the image element by ID on load

  // 2. Change the style of the `<img>` to have a `left` of `0px`.
  catImage.style.left = '0px'; // Set the initial left position to 0px (far left)

  // Call the catWalk function to start the animation
  catWalk();
});

function catWalk() {
  // 3. Complete the function called catWalk() to move the cat 10 pixels to the right
  //    of where it started, by changing the `left` style property.
  let currentLeft = parseInt(window.getComputedStyle(catImage).getPropertyValue('left'), 10);
  const newLeft = currentLeft + 10; // Move 10 pixels to the right

  // 4. Check if the cat reaches the right side of the screen
  const windowWidth = window.innerWidth; // Get the window width
  const imageRightEdge = currentLeft + catImage.clientWidth; // Calculate cat's right edge position

  if (imageRightEdge >= windowWidth) {
    // 5. When the cat reaches the right-hand of the screen, restart at the left
    catImage.style.left = '0px'; // Reset left position to 0
  } else {
    catImage.style.left = `${newLeft}px`; // Update left position if not at the edge
  }

  // 6. Check if the cat reaches the middle of the screen
  const middleX = windowWidth / 2;
  if (currentLeft + (catImage.clientWidth / 2) >= middleX) {
    // Show dancing cat for 5 seconds
    catImage.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif'; // Replace with dancing cat image

    setTimeout(() => {
      catImage.src = 'your_original_image.jpg'; // Replace back to original image after 5 seconds (you need to replace 'your_original_image.jpg' with the actual path to your original image)
    }, 5000); // Timeout for 5 seconds (5000 milliseconds)
  }

  // Call catWalk again after 50 milliseconds for continuous animation
  setTimeout(catWalk, 50);
}

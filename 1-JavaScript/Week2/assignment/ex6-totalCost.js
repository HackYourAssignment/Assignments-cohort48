'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  // TODO complete this object
  wine: 10.50, 
  cheese: 5.50,
  juice: 12.50,
  whiskey: 15.50,
  vodka: 14.50
};

function calculateTotalPrice(/* TODO parameter(s) go here */cart) {
  // TODO replace this comment with your code
  let total = 0;
  for (let item in cart) {
    if (typeof cart[item] === 'number') {
      total += cart[item];
    }
  }
  return `Total: €${total.toFixed(2)}`; 

  
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  // TODO replace this comment with your code
  const result = calculateTotalPrice({ apples: 2.99, oranges: 1.49 });
  console.log(result);   // Output: Total: €4.48
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
  const result = calculateTotalPrice(cartForParty);
  console.log(result);  // Output: Total: €58.50
}

function test() {
  test1();
  test2();
}

test();

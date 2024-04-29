'use strict';


const cartForParty = {
  // TODO complete this object
  beers: 1.65,
  chips: 1.04,
  water: 12.5,
  ayran: 8.99,
  raki: 12.49
};

function calculateTotalPrice(/* TODO parameter(s) go here */cart) {
  // TODO replace this comment with your code
  let totalPrice=Object.values(cart).reduce( (accumulate,current)=>accumulate+current,0)

return `Total: €${totalPrice.toFixed(2)}`; // Return the total price as a string
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  // TODO replace this comment with your code
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
}

function test() {
  test1();
  test2();
}

test();
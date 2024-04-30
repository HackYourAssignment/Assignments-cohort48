'use strict';

const cartForParty = {
  beers: 1.51,
  chips: 10.59,
  cheese: 22.77,
  cracker: 30.99,
  fruits: 35.29,
};

function calculateTotalPrice(prices) {
  if (prices.length === 0) {
    return `Total: €0`;
  }
  const totalPrice = Object.values(prices).reduce((sum, price) => sum + price);

  return `Total: €${totalPrice}`;
}
// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const expected = 1;
  const actual = calculateTotalPrice.length;
  console.assert(expected === actual);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
  const expected = 'Total: €9.84';
  const actual = calculateTotalPrice(cartForParty);
  console.assert(expected === actual);
}

function test() {
  test1();
  test2();
}

test();
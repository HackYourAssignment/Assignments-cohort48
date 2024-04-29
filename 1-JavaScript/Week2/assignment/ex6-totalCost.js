const cartForParty = {
  beer: 3.59,
  wijn: 2.34
};

function calculateTotalPrice(numbers) {
  const total = Object.values(numbers).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return `Total: €${total}`;
}

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const parameterCount = calculateTotalPrice.length;
  console.assert(parameterCount === 1, `Expected 1 parameter, but received ${parameterCount}`);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = 'Total: €5.93';
  const actual = calculateTotalPrice(cartForParty);
  console.assert(actual === expected, `Expected "${expected}", but received "${actual}"`);
}

function test() {
  test1();
  test2();
}

test();

'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-7-mind-the-privacy

1. Complete the `filterPrivateData()` function. It should take a single 
   parameter: the array of employee records.
2. It should create a _new_ array, containing employee data without the private
   data.
3. Use object destructuring to extract the non-private properties from an 
   employee record (an `object`) and object literal shorthand to create a new 
   employee record with just the non-private parts (name, occupation and email).
4. Return the new array as the return value of the function.
5. Run the exercise and verify that it passes all the unit tests.
------------------------------------------------------------------------------*/
const employeeRecords = [
  {
    name: 'John',
    occupation: 'developer',
    gender: 'M',
    email: 'john.doe@somewhere.net',
    salary: 50000,
  },
  {
    name: 'Jane',
    occupation: 'manager',
    gender: 'F',
    email: 'jane.eyre@somewhere.net',
    salary: 60000,
  },
];

// ! Function under test
// declare a single parameter the name is employee
function filterPrivateData(employee) {
  // create one array that can add object to array
  let filterEmployee = [];
  // read length my object
  for(let i = 0 ; i< employee.length ; i++){
    // in the length we separate object . what we need 
    // we divide 3 item one item is gender one item is salary and one item is the rest of the own object but with another name
     const {gender , salary , ...filteringFinish} =employee[i];//  ==========>>>>>>>>>> i changed let => to => const
    //  add the rest of object in my array empty
     filterEmployee.push(filteringFinish);
  }
return filterEmployee;
  }
  console.log(filterPrivateData(employeeRecords));
// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('Test 1: filterPrivateData should take one parameters');
  console.assert(filterPrivateData.length === 1);
}

function test2() {
  console.log('Test 2: gender and salary should be filtered out');
  const expected = [
    {
      name: 'John',
      occupation: 'developer',
      email: 'john.doe@somewhere.net',
    },
    {
      name: 'Jane',
      occupation: 'manager',
      email: 'jane.eyre@somewhere.net',
    },
  ];
  const result = filterPrivateData(employeeRecords);
  console.assert(JSON.stringify(result) === JSON.stringify(expected));
}

function test() {
  test1();
  test2();
}

test();

'use strict';

console.log('--- in execution phase ---');

/*
  environment:Chrome Browser

  name:TypeError
  message:maxNumber is not iterable

  location:Line 22 column 17

  life cycle:During execution phase

  the mistake:Trying to iterate a number that is not iterable

  the fix(es):making a number a string or an array.
*/

const maxNumber = '6';
let num=""
for (const i of maxNumber) {
  num +=i;
   // 0, 1, 2, 3, 4, 5
}
console.log(num);
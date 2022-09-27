'use strict';

console.log('--- in execution phase ---');

/*
  environment:Browser Chrome

  name:ReferenceError
  message:Cannot access 'isValidUserName' before initialization

  location:line 24 column 19

  life cycle:during execution

  the mistake:we are trying to access the variable isValidUserName before initializing it.

  the fix(es):
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;
if (userName.length > 3) {
  isValidUserName = true;
}



if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);

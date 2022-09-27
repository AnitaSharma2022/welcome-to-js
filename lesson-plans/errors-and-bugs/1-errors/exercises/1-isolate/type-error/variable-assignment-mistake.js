

'use strict';

console.log('--- in execution phase ---');


/*
  environment:Chrome Browser

  name:SyntaxError
  message:Invalid left-hand side in assignment

  location:line 25

  life cycle:During creation phase

  the mistake:value is on left and variable name is on right side.

  the fix(es):
*/

let isHappy = false;

//true = isHappy;
isHappy=true;



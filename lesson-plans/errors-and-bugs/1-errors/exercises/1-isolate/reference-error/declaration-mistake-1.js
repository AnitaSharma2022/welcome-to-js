'use strict';

console.log('--- in execution phase ---');

/*
  environment:Browser Chrome

  name:ReferenceError 
  message: welf is not defined

  location:line 20 column 6

  life cycle:During execution

  the mistake:We are using welf variable without declaring it.

  the fix(es):declaring welf .
*/

let welf = 'ingrad';

console.log(welf);

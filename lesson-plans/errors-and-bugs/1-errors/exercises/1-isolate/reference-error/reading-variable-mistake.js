'use strict';

console.log('--- in execution phase ---');

/*
  environment:Browser chrome

  name:ReferenceError
  message:Cannot access 'tomatoes' before initialization

  location:line 20 column 13

  life cycle:During execution

  the mistake:We are trying to access variables tomatoes before initializing it.

  the fix(es):
*/
let tomatoes = 'fresh';s
console.log(tomatoes);



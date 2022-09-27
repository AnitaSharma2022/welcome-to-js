'use strict';

console.log('--- in execution phase ---');

/*
  environment:Chrome Browser

  name:SyntaxError
  message:Identifier 'tree' has already been declared

  location:line 22

  life cycle:During Creation phase

  the mistake: variable tree is declared twice.

  the fix(es):second time instead of declaring tree we can re-assign it 
*/

let tree = 'oak';

 tree = 'birch';



'use strict';

console.log('--- in execution phase ---');


/*
  environment:Browser chrome

  name:SyntaxError
  message:Unexpected token 

  location:line 27 column 6

  life cycle:during execution

  the mistake:syntax mistake if else if and else

  the fix(es):write else if 
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}



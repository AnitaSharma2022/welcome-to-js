

'use strict';

console.log('--- in execution phase ---');


/*
  environment:Browser chrome

  name:SyntaxError
  message:Unexpected string

  location:line 23 

  life cycle:During creation phase.

  the mistake:Initializing string in wrong way.

  the fix(es):adding escape characters before double quotes.
*/

const quotesInQuotes = 'remind yourself \'\'i can do this!\'\' at least once a day';
console.log(quotesInQuotes);



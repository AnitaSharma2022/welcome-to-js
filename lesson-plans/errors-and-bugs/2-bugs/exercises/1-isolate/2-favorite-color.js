'use strict';

/*
  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line:21
    why:input equals to null and length is equal to 0.
    trying:!= instead of === , || instead of && and  >= instead of length ===0

  experiment 2
    line:28
    why:message is = input so not adding the string "you entered"
    trying:adding + before =
    
*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');
//if (input ===0 && input.length === 0)
  if (input != null || input.length > 0) {
    //message = input + '"';
    message += input + '"';
    break;
  }
}

alert(message);

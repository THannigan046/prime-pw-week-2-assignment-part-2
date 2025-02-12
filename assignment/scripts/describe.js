// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to the string 'Dane'
// Then we create a conditional that logs 'Hi, Mary!' to the console if the name is equal to Mary
// then we create an else statement that logs 'How do you do' if it receives any different name.
// console should print "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret
// We create a variable called code and assign it to the number 123
// We then create two conditional statements that affect secret and code.
// The first statement sets secret's value to super/multiplies code's value by 2 if code equals 123
// the second statement sets secret's value to duper if code's value is greater than 250
// We then log secret's value to the console

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a value called isStudent and set its value to true
// we create a value called age and set its value to 34
// we create a value called zip and set its vallue to 55407
// We create a multi-step conditional statemenet that logs different statements to the console depending on the input.
// if isStudent's value is true and zip's value is greater than 80000, the console prints `You're a student on the West Coast!`
// if isStudent's value is false or age is less than 30, the console prints 'What are your hobbies?'
// if isStudent's value is true, the console prints 'Welcome to Prime!'
// console prints 'How about the Weather?' if it receives any other input

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
// FIX - colorOne and colorTwo are flip-flopped.
// Should be let colorOne = 'blue' and let colorTwo = red
// if statement should also include "colorTwo = 'purple'"
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}

// FIX - Should be 'let time = 4'
// time changes and is not constant. If it was always 4, that'd be bad. But I guess I could be wrong about that.
//Should also be:  if (temp > 39 && time >= 4)
// and, not or
*/ 

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
// FIX - if statement is flip-flopped, console statement is wrong, and else statement is not specified.
// Should be
if(age >= minAge) {
  console.log('enter');
}

*/

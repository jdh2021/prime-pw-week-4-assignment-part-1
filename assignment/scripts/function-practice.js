console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Jan'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('Adding the two numbers returns', addNumbers(0,21) + '.');

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  let result = firstNumber * secondNumber * thirdNumber;
  return result;
}
console.log(`Multiplying the three numbers returns ${multiplyThree(3,5,-2)}.`);

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length === 0) {
    return 'undefined';
  } else {
    return array[array.length-1];
  }
}
console.log('The last item in this array is', getLast([1, 2, 3, 4, 5, 0]) + '.');
console.log('The last item in this array is', getLast([]) + '.');

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let i=0; i<array.length; i+=1) {
    if (value === array [i]) {
      return true;
    }
  }
  return false;
}
console.log('Was the value found?', find(3, [9, 0, 3, 1]) + '.'); //expect true
console.log('Was the value found?', find('cat', ['dog', 'bird', 'fish']) + '.'); //expect false

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let i=0; i<string.length; i+=1) {
    if (letter === string[0]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0;
  // TODO: loop to add items
  for (let i=0; i<array.length; i+=1) {
    sum+=array[i]
  }
  return sum;
}
console.log(`The sum of the the numbers in the array is ${sumAll([1, 5, 3, -1, 4])}.`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveNumbersSearch (array) {
  let positiveNumbersFound = [];
  let noPositiveNumbersFound = [];
  for (let i=0; i<array.length; i+=1) {
      if (array[i] > 0) {
        positiveNumbersFound.push(array[i]);
      } 
    }
    if (positiveNumbersFound.length > 0) {
      return positiveNumbersFound;
    } else {
      return noPositiveNumbersFound;
  }
}
console.log(positiveNumbersSearch([12, 2, 3, 1, 9]));
console.log(positiveNumbersSearch([0, -1, -5]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

/*Reverse Words Starting With a Particular Letter
Published by Helen Yu, Source: edabit.com
Write a function that reverses all the words in a sentence that 
start with a particular letter. 
*/

/** 
 * Reverse only words that start with an input character in a given sentence.
*@param {string} sentenceString 
*@param {character} characterInput
*@return {string} finalSentenceString
*/

function specialReverse(sentenceString, characterInput) {
  let stringToArray = sentenceString.split(' ');
  let newSentence = [];
  for (let i=0; i <stringToArray.length; i+=1) {
      let thisWord = stringToArray[i];
      let firstLetter = thisWord[0];
      let newWord = [];
      let newWordString = '';
      if (firstLetter.toLowerCase() === characterInput.toLowerCase()) {
        for (y=thisWord.length-1; y >=0; y-=1) {
          newWord.push(thisWord[y]);
          newWordString = newWord.join('');
        } newSentence.push(newWordString);
      } else {
        newSentence.push(thisWord);
      }
  }
   let finalSentenceString = newSentence.join(' ');
   return finalSentenceString;
}
console.log(specialReverse('She sells seashells by the seashore', 's'));
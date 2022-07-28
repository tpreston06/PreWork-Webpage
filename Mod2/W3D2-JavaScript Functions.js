// /* 
// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. 
// Do some googling to figure this out if you forget how conditionals work.
// */

maxOfTwoNumbers = (x, y) => {
  // ADD YOUR CODE HERE
  if (x > y){
    console.log(x + "is larger than" + y)
  }
  else{
    console.log(y + " is larger than " + x)
  }
};

maxOfTwoNumbers(10, 100)

// // maxOfThree();

// /*
// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// */
 maxOfThree = (x,y,z) => {
   // ADD YOUR CODE HERE
   if(x > y && x > z){
    console.log(x + ` is the larger number`);
   }
   else if(y > x && y > z){
    console.log(y + ` is the Largest number`);
   }
   else{
    console.log(z + ` is the Largest number`);
   }
 };
 maxOfThree(6, 3, 9)

// /*
// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns 
// true if it is a vowel, false otherwise.
// */
 isCharacterAVowel = (str) => {
  // ADD YOUR CODE HERE
  if(str == "a" || str == "e" || str == "i" || str == "o" || str == "u"){    
    console.log(str + ' is a vowel')
  }
  else{    
    console.log(str + ' is not a vowel')
  }
};
isCharacterAVowel('a')

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies 
(respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) 
should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/
let sum = 0;
 sumArray = (array) => {
  // ADD YOUR CODE HERE
for(const i of array){
  sum += i;
  console.log(sum) 
 }
};
sumArray([1,2,3,4])

let multiply = 1;
multiplyArray = (array) => {
  for(const x of array){
    multiply *= x;
    console.log(multiply)
  }
};
multiplyArray([1,2,3,4])

/* function multiplyArray(array){
  let multiply = 1
  for(let i = 0; i< array.length; i += 1){
    multiply *= array [i]
  }
  console.log(multiply)
}
multiplyArray([1,2,3,4])*/ 

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

function argCounter(){
  console.log(argument.length);
}
argCounter(1,30, true, "boy");
/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

var reverseString = function(s) {
  let backwards=[]
  for(let i = s.length-1; i >= 0; i--){
    backwards.push(s[i])      
    console.log(s[i])
  }
  return backwards
};
reverseString("hello world")

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));


/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
function filterLongWords(array, i) {
  let y = [];
  for(x of array){
    if(x.length > i){
      y.push(x)
    } 
  } return y
}

console.log(['apple', 'banana', 'pear', 'orange', 'cat', 'dog'], 4);


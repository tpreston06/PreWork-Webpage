/*
 * Before you begin working on the prompts, remember to run "node dataTypes.js" 
   in the terminal to see your answers displayed.

   Also, some of the prompts are commented out, please uncomment them to make them work.
 */
console.log('dataTypes.js has been included!')

/*
 * Prompt:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */
let myFavoriteNumber;
myFavoriteNumber = 7;

/*
 * Prompt:
 *
 * Declare 3 variables using each of let, const, and var.
 */
let myVariable = 1;
const yourVariable = "Cant change value";
var ourVariable = true;
/*
 * Prompt:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */
let thisVariable  = 20;
// thisVariable += 5;
// thisVariable -= 1;
// thisVariable *= 3;
thisVariable /= 7
console.log(thisVariable / 2);
/*
 * Prompt:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */
let firstName = "Tia";
let lastName = "Preston";
let fullName = firstName + lastName
console.log(fullName)
/*
 * Prompt:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */
let hello = 'Hello';
let world = 'World';
let message = `${hello} ${world}`
console.log(message)
/*
 * Prompt:
 *
 * Write some code that solves each sub-prompt below.
 */

// A. Use loose-equals (==) to create a statement that is false
// B. Use strict equals (===) to create a statement that is true
// C. Use strict unequal (!==) to create a statement that is true
// D. Use less than (<) to create a statement that is false
// E. Use greater than (>) to create a statement that is false
// F. Use less than or equals (<=) to create a statemetn that is true
// G. Use greater than or equals (>=) to create a statemetn that is false


i == b
j === j
0 !== 1


/*
 * Prompt:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to true
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = 'Kevin';

//  console.log(a _ b);

//  console.log(c _ d);

//  console.log('Name' _ 'Name');

//  console.log(a + b _ c);

//  console.log(a * a _ d);

//  console.log(e _ 'Kevin');

//  console.log(48 _ '48');

 /*
 * Prompt:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false
 */

a = 6;
b = 100;
c = -5;
d = 3000;
e = 'Jelly Bean';

// console.log(a _ b);

// console.log(c _ d);

// console.log('Peanut' _ 'Peanut');

// console.log(a + b _ c);

// console.log(a * a _ d);

// console.log(e _ 'Jelly Bean');

// console.log(48 _ '48');

/*
 * Prompt:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

 console.log(array1);
 console.log(array2);
 console.log(array3);

 /*
 * Prompt:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(array4);

/*
 * Prompt:
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".


// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".


// Remove "Pittsburgh" from Kristyn's array and add "Oakland".


/*
 * Prompt:
 *
 * Answer the subprompts below.
 */
// Create an array of strings called `foods` that contains three foods.
// Type your solution immediately below this line:



//  Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:


// Create an empty array called `favoriteFoods`.
// Type your solution immediately below this line:


// Create a `for` loop that adds each string in `foods` to `favoriteFoods`.
// Type your solution immediately below this line:

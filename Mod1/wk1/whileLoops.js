//While loops

// var a = 0
// while(a < 10){
//     console.log(a)
//     a += 2
// }

// console.log('finished')

// var a = 1
// while(a < 7){
//     if(a % 2 == 0){
//         console.log(a + ' is even')
//     }
//     else{
//         console.log(a + ' is odd')
//     }
//     a += 1
// }

// console.log('all down')

//Example by ahmed
// console.log('Countdown:')
// var b = 10            //initialize the variable
// while(b >= 0){        // set up the condition for the Loop
//     console.log(b)    // printing the variable
//     b--              // decrementing the variable
// }

//Exercise 1
// var a = 0
// while(a < 35){
//     console.log(a)
//     a+=3
// }


//Exercise 2
// no

//Exercise 3
// var a = 0
// while(a <= 20){
//     if(a % 2 == 0){
//         console.log(a * 3)
//     }
//     else{
//         console.log(a)
//     }
//    a += 1 
// }

// //Exercise 4
// var a = 0
// while(a <= 20){
//     if(a % 1 == 0){
//         console.log(a)
//         a++
//     }
    
// }


// var a = 0;

// while(a <= 100){
//     if (a % 3 === 0){
//         console.log('FizzBuzz')
//     }
//     else if(a % 3 === 0){
//         console.log('Fizz')
//     }
//     else if (a % 5 === 0){
//         console.log('Buzz');
//     }
//     a++
// }

// let addThis = 0;
// let sum = 0;

// while(addThis < 10){
//   addThis ++
// }

// // Uncomment the line below to check your work!
//  console.log(sum + addThis);

const fb = [];
// ADD CODE HERE
while(fb < 16){
  if(fb % 3 == 0 && fb % 5 == 0){
    console.log('fizzbuzz')
  }
  else if(fb % 3 == 0){
    console.log('fizz')
  }
  else if(fb % 5 == 0){
    console.log('buzz');
  }
  fb++;
}
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
console.log(fb)
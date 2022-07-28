// const fs = require('fs');
// console.log(typeof fs);

// fs.writeFile('./hello.txt', 'Hello', function(){
//     console.log('done creating file');
// });

let daysOfWeek = require('./daysofweek')
let day = daysOfWeek.getWeekday(7)
//let monthsOfYear = require('./monthsOfYear)
console.log(day)
//console.log(monthsOfYear)
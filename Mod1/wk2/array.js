let colors = ['cerulean', 'vermillion',
'chartreuse', 'burgundy', 'mahoghany',
'periwinkle']; //Length = 6 Last index = 5

let yummies = ['spaghetti', 'pizza', 'cake',
'fish tacos', 'poke', 'French Toast',
'meatloaf']

// console.log(colors[3]) //this will be burgundy
// console.log(yummies[4]) //this will be poke
// console.log(colors.length)

// console.log(colors[2])
// console.log(colors[colors.length -1])

console.log(colors.length)//6
colors.push('green')//adding green to the end of the array

console.log(colors)// shows the array
console.log(colors.length)//7
colors.pop() // will remove 'green'
console.log(colors) //shows the array
console.log(colors.length) //6

console.log(colors.sort()) //sorts this into alphabetical order

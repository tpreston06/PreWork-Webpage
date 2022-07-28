let student = {
    id: '00001',
    first_Name: 'Tishana',
    last_Name: 'Trainor',
    classes: ['Software Engineering', 'Bowling', 'Technical Drafting'],
    major: 'Electronics Engineering',
    address: {houseNumber: 1234, street: "Sesame St", city: "New York"},
}

console.log(student.classes)

let students = ['Dylan', 'Jessica', 'Melissa', 'Mahasin']

const one = ['Fire', 'Air', 'Water']
var two =['Electricity', 'Water', 'Air', 'Pickles', 'Dogs']
var three = one.join('*')
//console.log(three)// makes one into a string without changing one
console.log(two.reverse())
console.log(two.shift())
console.log(two)
two.unshift('dogs') //adding dogs to the beginning of the array
console.log(two)
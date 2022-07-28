let titleE1 = document.getElementById('title')
console.log(titleE1)

let titleOther = document.querySelector('#title')
console.log(titleOther)

let myChoice = document.querySelector('h1')
console.log(myChoice)

let pE1 = document.querySelector('cool')
console.log(pE1)

pE1.textContent = 'Comments for <strong>Today</strong>'

titleE1.style.textAlign='center'
pE1.style.color='darkcyan'

console.log(pE1.getAttribute('class'))
titleE1.setAttribute('name',"ridiculous")
console.log(titleE1.getAttribute('name'))
console.log(titleE1.hasAttribute('name'))


for (let commentE1 of commentE1s){
    console.log(commentE1)
}

let commentE1s = document.querySelectorAll('.comment')
console.log(commentE1s)

for(let commentE1 or commentE1s){
    commentE1.style.fontSize = '30px'
}
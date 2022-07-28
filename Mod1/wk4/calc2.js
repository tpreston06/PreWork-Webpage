//create variable declaration
let button = document.getElementById('btn')
let answerField = document.getElementById('answerField')

let heading = document.getElementById('heading')




//math operations
let num1 = document.getElementById('num1').value || 0
let num2 = document.getElementById('num2').value || 0

let operator = document.getElementById('operators')


let answer = operatorFunction(num1, num2, operation) 



//function declaration
function operatorFunction(num1, num2, operation){ //takes in user input and does operation  
    if(operation == 0){
        return num1 + num2
    }
    else if(operation == 1){
        return num1 - num2
    }
    else if(operation == 2){
        return num1 * num2
    }
    else{
        return num1 / num2
    }
}





//body 
heading.textContent = "JS heading"
answerField.textContent = 'result: ' + answer

button.textContent = 'calculate'
let operation = operator.selectedIndex

button.onclick = (event) => {
    // window.location.reload()
    event.preventDefault()
    operatorFunction(num1, num2, operator)
}
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let operator = document.querySelector('.operators');
let solve = document.querySelector('#btn');


solve.addEventListener('click', calc); //calc is a callback function



function calc(e) {

    if (operator.value == 'add') {
        document.getElementById('answer').innerHTML = add(parseInt(num1.value), parseInt(num2.value));
    } else if (operator.value == 'sub') {
        document.getElementById('answer').innerHTML = sub(num1.value, num2.value);
    } else if (operator.value == 'mult') {
        document.getElementById('answer').innerHTML = mult(num1.value, num2.value);
    } else {
        document.getElementById('answer').innerHTML = divide(num1.value, num2.value);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let comChoice = ["rock", "paper", "scissors"]


function computerPlay(){
    return Math.floor(Math.random()* comChoice.length)-1

}
console.log(computerPlay)
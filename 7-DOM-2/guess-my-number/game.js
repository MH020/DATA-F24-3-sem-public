//Save the buttons as constants
const guessButton = document.querySelector("#guessButton")
//Add an eventListener that takes input from the input field
const inputfield = document.querySelector("#userGuess")
const text = document.querySelector("p")
const reset = document.querySelector("#reset")


//Print something to the console
guessButton.addEventListener("click",() => {
    let guessvalue = Number(inputfield.value)
    console.log("click")
    if (guessvalue === randomNumber) {text.innerText =("right")}
    if (guessvalue > randomNumber) {text.innerText =("it should be higher")}
    if(guessvalue < randomNumber) {text.innerText =("it should be lower")}
})
reset.addEventListener("click",() => {
    randomNumber = generateNumber();
    console.log(randomNumber)
})


//Make a random number between 1-5
let randomNumber = generateNumber();
console.log(randomNumber);

//Returns a random number between 1-5
function generateNumber(){
    return Math.floor(Math.random() * 5) + 1;
}
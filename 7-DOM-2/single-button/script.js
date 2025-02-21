'use strict'

const button = document.querySelector("#spinButton");

const testButton = document.querySelector("#test");

const reset = document.querySelector("#reset")

const text = document.querySelector("p")

testButton.addEventListener("click", () =>{
    console.log("Hey du klikkede knappen!!!!");
});

let timesPressed = 0;

//Add event listener to the test button 

button.addEventListener("click", () => {
    //This spins around the button
    document.getElementById("spinButton").style.transform += "skew(-50deg, 25deg) rotate(270deg)";
});

const clickme = document.querySelector("#click-me");

clickme.addEventListener("click", () => console.log("ah thank you") )

button.addEventListener("click", () => {
    timesPressed++
    if (timesPressed > 1)
    text.innerText = ("Please do not do that again")
    if (timesPressed > 2) text.innerText = ("I told you not to do that")
    if (timesPressed > 3) text.innerText = ("STOP!!!")
});

reset.addEventListener("click", () => timesPressed = 0)





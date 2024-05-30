// import * as readline from 'node:readline';
const { maxHeaderSize } = require("http");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
const secretNumber = randomInRange(0, 100);

function checkGuess(num) {
    if(num > secretNumber){
        console.log("Too high!");
        return false;
    } else if(num < secretNumber){
        console.log("Too low!");
        return false;
    }
    else{
        console.log("Correct!")
        return true;
    }
}
function askGuess(){
    rl.question("Enter a guess: ", (answer) =>{
        const guess = Number(answer);
        const result = checkGuess(guess);
        if(result === true){
            rl.close()
        }else{
            askGuess();
        }
    });
}

function randomInRange(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random()*(maxFloored-minCeiled+1)+minCeiled)

}

// askGuess();

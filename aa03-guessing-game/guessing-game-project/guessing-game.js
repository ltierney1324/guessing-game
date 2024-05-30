// import * as readline from 'node:readline';
const { maxHeaderSize } = require("http");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
let secretNumber = null;
let maxAttempts = null;
let attempts = 0;
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
        attempts++;
        if(result === true){
            rl.close()
        }else if(attempts < maxAttempts){
            console.log("You have " + (maxAttempts-attempts) + " left")
            askGuess();

        }else if(attempts >= maxAttempts){
            console.log("You have reached the maximum number of attempts");

            rl.close();
        }
    });
}

function randomInRange(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random()*(maxFloored-minCeiled+1)+minCeiled)

}

function askRange(){
     rl.question("Enter a minimum number: ", (minNum) =>{
        const minVal = Number(minNum);

        rl.question("Enter a max number: ", (maxNum)=>{
            const maxVal = Number(maxNum)
            secretNumber = randomInRange(minVal, maxVal)
            console.log("I'm thinking of a number between " + minVal + " and " + maxVal);

            askGuess();

        });
    });
}
function askLimit(){
    rl.question("Enter a max number of attempts: ", (att) =>{
        maxAttempts = Number(att);
        askRange();
    });
}

// askGuess();
// askRange();
askLimit();

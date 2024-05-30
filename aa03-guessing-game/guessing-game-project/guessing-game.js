// import * as readline from 'node:readline';
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
const secretNumber = 26;

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

askGuess();
// console.log(checkGuess(10));
// console.log(checkGuess(50));
// console.log(checkGuess(26));

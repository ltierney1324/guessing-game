
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

console.log(checkGuess(10));
console.log(checkGuess(50));
console.log(checkGuess(26));


let input= parseInt(prompt('Guess a number'));
while(!input){
     input= parseInt(prompt('Guess a valid'));
}
const targetNum = Math.floor(Math.random() * input) + 1;
console.log(targetNum);

let guess= (prompt('Enter your guess number'));
let attempts =1;
while(guess !== targetNum){
    if (guess==="q") break;
    attempts++;
    if (guess > targetNum){
        guess= prompt("Too high! Guess again");
    }
    else {
        guess = prompt("Too low! Guess again");
    }
}
console.log(`YOU GOT IT! It took you ${attempts} guesses`);


                                //  PRESS 'q' to quit
let max = prompt('Enter a maximum number');
let random = Math.floor(Math.random()*max)+1;
let guess = prompt('Enter the guess number between 1 to max number:');

while(true){
    if(guess == 'quit'){
        console.log(`quitting guess game`);
        console.log(`By the way number is ${random}`)
        break;
    }

    if(guess == random){
        console.log(`Congrats number is ${random}`);
        break;
    }else if(guess<random){
        guess = prompt(`hint: your guess is too small. please try again!`);

    }else{
        guess = prompt(`hint: your guess is too large. please try again!`);

    }
   
}
let favMovie = 'HIT';
let guess = prompt('Guess my favourite movie name:');

while((guess!=favMovie) && (guess!='quit')){
    guess = prompt(`wrong name please try again:`);
}

if(guess == favMovie){
    console.log(`Congrats!`)
} else {
    console.log(`You quit`)
}
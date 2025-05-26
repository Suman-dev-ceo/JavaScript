let gameSeq = [];
let userSeq = [];
let btns = ['red','yellow','green','purple'];
let score = [];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let h4 = document.querySelector('h4');

document.addEventListener('keypress', function(){
    if(started == false){
        started = true;
        console.log('game started');
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add('gameFlash');
    setTimeout(function (){
        btn.classList.remove('gameFlash');
    }, 250);
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function (){
        btn.classList.remove('userFlash');
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
     h2.innerText = `Level ${level}`;
     //choose random box
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

     gameFlash(randbtn);
}

function checkAns(idx){
    // console.log('curr level', level);
   //checking last element
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `game over! Your score is <b> ${level} </b> <br> Press any key to start` ;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },150)
        score.push(level);
        highScore(score);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    //to access color of the button we are giving colors as id  and we don't use ids for style.
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
   btn.addEventListener('click',btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// function highScore(score) {
//     let top = score.reduce((max, el) => el > max ? el : max, 0);
//     h4.innerText = `High Score : ${top}`;
// }

function highScore(score) {
   let num = score.reduce((top , el) => {
        if(top < el){
            return el;
        } else {
            return top;
        }
    });
    h4.innerText = `High Score : ${num}`;
}
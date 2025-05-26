let btns = document.querySelectorAll('button');
// console.dir(btn);

for(btn of btns){
    
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log('You have entered my area !')
    }
}

function sayHello(){
    alert('button was clicked');
    console.dir(this);
}


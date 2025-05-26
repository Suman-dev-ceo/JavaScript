let btn = document.createElement('button');
let btn2 = document.createElement('button');
let div = document.createElement('div');
let body = document.querySelector('body');
let h2 = document.querySelector('h2');
let inp = document.querySelector('input');

body.append(btn);
btn.innerText = 'click me';

btn.addEventListener('mouseout', function() {
    console.log('You are out of my area');
});


div.innerText = 'press anykey to turn me into orange color';
div.style.marginTop = '10px';
div.style.border = '2px solid black';
div.style.width = '400px';
div.style.height = '300px';
body.append(div);
document.addEventListener('keypress', () => {
    div.style.backgroundColor = 'orange';
});

document.addEventListener('scroll', () => {
    btn.style.backgroundColor = 'yellow'
});
 
// to make document scrollable 
for(let i =0; i<=100; i++){
    let p = document.createElement('p');
    p.innerText = 'line'+(i+1);
    body.append(p);
}

window.addEventListener('load', function(){
    console.log('page loaded fully');
});
btn2.innerText = 'Hello';
body.append(btn2);
btn2.addEventListener('click', function(){
    btn2.style.backgroundColor = 'green';
});

// inp.addEventListener('input',function(){
//     let original = inp.value;
//     let filtered = "";
//     for(let i=0; i<original.length; i++){
//         let char = original[i];
//         if(char >= 'A' && char <= "Z" ||
//             char >= 'a' && char <= 'z' ||
//             char === ' '
//         ){
//             filtered += char;
//         }
//     }

//     h2.innerText = filtered;
// });

inp.addEventListener('input', () => {
      // Remove all characters except A-Z, a-z and space
      const filtered = inp.value.replace(/[^a-zA-Z ]/g, '');
      h2.innerText = filtered;
    });
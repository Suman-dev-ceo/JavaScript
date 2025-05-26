//question 1
let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerText = 'Click me';

document.querySelector('body').append(input);
document.querySelector('body').append(btn);


//question 2 
input.placeholder = 'username';
btn.id = 'btn';

//question 3 
document.querySelector('#btn').style.backgroundColor = 'blue';
document.querySelector('#btn').style.color = 'white';

//question 4
let h1 = document.createElement('h1');
h1.innerText = 'DOM Practice';
document.querySelector('body').append(h1);
h1.style.color = 'Purple';
h1.style.textDecoration  = 'underline';

//question 5
let p = document.createElement('p');
p.innerHTML = 'Apna College <b>Delta</b> Practice';
document.querySelector('body').append(p);
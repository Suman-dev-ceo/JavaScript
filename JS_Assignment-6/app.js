// function rollDice(){
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }

// rollDice();
// rollDice();
// rollDice();

// function printTable(n) {
//     for (let i = n; i<=n*10; i+=n){
//         console.log(i);
// }
// }

// function getsum(n) {
//     let sum = 0;
//     for(let i =1; i<=n; i++){
//         sum +=i;
//     }
//     return sum;
// }

// console.log(getsum(8));

// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         let a =10;
//         console.log(x);
//         console.log(y);
//     }
//     console.log(a);
//     innerFunc();
// }

// console.log(outerFunc())

//higher order functions
// function multipleGreet(func, count){
//     for(let i = 1; i<=count; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log('hello');
// }

// multipleGreet(greet, 2);

// let odd = function(n){
//     console.log(!(n%2==0));
// }

// let even = function(n){
//     console.log(n%2==0);
// }

// function oddOrEvenFactory(request){
//     if(request == 'odd'){
//         let odd = function(n){
//             console.log(!(n%2==0));
//     }
//     return odd;
//     } else if(request == 'even') {
//         let even = function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     } else {
//         console.log('wrong request')
//     }
// }

// let request = 'odd' //even

// function oddOrEvenFactory(request){
//     if(request == 'odd'){
//         return function(n){
//             console.log(!(n%2==0));
//     }
     
//     } else if(request == 'even') {
//         return function(n){
//             console.log(n%2==0);
//         }
        
//     } else {
//         console.log('wrong request')
//     }
// }

// let request = 'odd' //even

//new

// const calculator ={
//     add : function(a,b){
//         return a+b;
//     },
//     sub : function(a,b){
//         return a-b;
//     },
//     mul : function(a,b){
//         return a*b;
//     }
// };


const calculator ={
    add (a,b){
        return a+b;
    },
    sub (a,b){
        return a-b;
    },
    mul (a,b){
        return a*b;
    }
};
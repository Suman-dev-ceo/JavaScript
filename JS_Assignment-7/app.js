// console.log('hii there');

// setTimeout(()=> {
//     console.log('Suman Home');
// },4000);

// console.log('Welcome to');


// let id = setInterval(() => {
//     console.log('pen is mine!')
// }, 2000);

// console.log(id);


// let square = n => (n*n);
// console.log(square(9));

// let square2 = (n) => {
//     return n*n;
// }

// console.log(square2(55));


let id = setInterval(() => {
    console.log('Hello World!');
}, 2000);

setTimeout(()=>{
    clearInterval(id);
    console.log('clearInterval ran');
},10000);
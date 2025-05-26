let h1 = document.querySelector('h1');

// function colorChange(color, delay, nextColorChange){
//     setTimeout(()=> {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// colorChange('red', 1000, () => {
//     colorChange('green', 1000, () => {
//         colorChange('orange', 1000, ()=> {
//             colorChange('yellow', 1000, () => {
//                 colorChange('blue', 1000);
//             });
//         });
//     });
// });


function colorChange(color, delay ){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
        h1.style.color = color;
        resolve('color was changed');
    }, delay);
    });
}

colorChange('red',1000)
.then(()=>{
    console.log('changed into red');
    return colorChange('green', 1000);
})
.then(()=>{
    console.log('changed into blue');
    return colorChange('orange',1000);
})
.then(()=>{
    console.log('changed into orange');
    return colorChange('yellow',1000);
})
.then(()=>{
    console.log('changed into yellow');
    return colorChange('blue',1000);
})
.then(()=> {
    console.log('changed into blue');
})

// colorChange('red', 1000);
// colorChange('orange', 2000);
// colorChange('green', 3000);


// function colorChange(color){
//     h1.style.color = color;
// }

// setTimeout( colorChange('red'), 1000);

// setTimeout( colorChange('orange'), 2000);

// setTimeout( colorChange('green'), 3000);

//not working direct black to green
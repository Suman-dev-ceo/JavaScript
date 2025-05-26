// async function hello(){
//     // throw 'some random error';
//     return 'hello';
// }

// hello()
// .then((result)=> {
//     console.log('promise was resolved');
//     console.log('result was:', result);
// })
// .catch((error)=> {
//     console.log('promise was rejected');
//     console.log('error was:',error);
// });

// let hola = async () => {
//     return 10;
// }

// function hello(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         let random = Math.floor(Math.random()*10)+1;
//         console.log(random);
//         resolve();
//     }, 1000);
//     });
// }

// async function demo (){
//     await hello();
//     await hello();
//     await hello();
//     await hello();
//     await hello();
//     hello();
// }

function hola(){
    return new Promise((resolve, reject)=>{
        let rand = Math.floor(Math.random()*5)+1;
        if(rand>3){
            console.log('working');
            resolve(rand);
            // return rand;
        } else {
            console.log('terminaed');
            reject('bad thing');
        }
    });
}

//string data 

let response = '{"fact":"Tabby cats are thought to get their name from Attab, a district in Baghdad, now the capital of Iraq.","length":100}';

JSON.parse(response);
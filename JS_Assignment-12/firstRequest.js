// let url = 'https://catfact.ninja/fact';

// fetch(url)
// .then((res) => {
//     console.log(res);
//     res.json().then((data) => {
//         console.log(data);
//     })
// })
// .catch((err) => {
//     console.log('ERROR -',err);
// })

let url = 'https://catfact.ninja/fact';

// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//         console.log(data.fact);
//         return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=> {
//     console.log(data2.fact);
// })
// .catch((err) => {
//     console.log('ERROR -',err);
// })

// console.log('chapter 12 is completed!') //first this will execute. JS never waits.


//same above program using async and await

async function randFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();

        console.log(data);

        let res2 = await fetch(url);
        let data2 = await res2.json();

        console.log(data2);
    } catch(e) {
        console.log('error -', e);
    }
    console.log('bye');
}

console.log(randFacts());
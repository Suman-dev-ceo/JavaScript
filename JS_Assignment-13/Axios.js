let btn = document.querySelector('button');

btn.addEventListener('click', async ()=>{
    let fact = await randFacts(); // Since randomFact() is asynchronous, here we get promise obj not actual data. In order to get data we must use 'await' before randomFact() and we know to use await keyword function must be async that's why we made a async function.
    // console.log(fact);
    let p = document.querySelector('#result');
    p.innerText = fact;

});

let url = 'https://catfact.ninja/fact';

async function randFacts(){
    try{
        let res = await axios.get(url);
         

       return res.data.fact;

         
    } catch(e) {
        console.log('error -', e);
        return "No fact was found";
    }
     
}

console.log(randFacts());
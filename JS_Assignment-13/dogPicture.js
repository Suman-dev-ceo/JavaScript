let btn = document.querySelector('button');

btn.addEventListener('click', async ()=>{
    let link = await randImg(); // Since randomFact() is asynchronous, here we get promise obj not actual data. In order to get data we must use 'await' before randomFact() and we know to use await keyword function must be async that's why we made a async function.
    console.log(link);
    let img = document.querySelector('#result');
    img.setAttribute('src',link);
    // img.src = link; 
 
});

let url = 'https://dog.ceo/api/breeds/image/random';

async function randImg(){
    try{
        let res = await axios.get(url);
         
        return res.data.message;

         
    } catch(e) {
        console.log('error -', e);
        return "/";
    }
     
}

console.log(randImg());
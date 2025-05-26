const url = 'https://icanhazdadjoke.com/';

async function randJoke() {
    try{
        let config = {headers: {Accept : 'application/json'}};
        let res = await axios.get(url,config);
        console.log(res.data.joke);
    } catch(e) {
        console.log('error -',e);
    }
}

console.log(randJoke());
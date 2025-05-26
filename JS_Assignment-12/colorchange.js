let h1 = document.querySelector('h1');

function colorChange(color, delay ){
    return new Promise((resolve, reject)=>{       
        setTimeout(()=> {
            let random = Math.floor(Math.random()*5)+1;
        if(random>3){
            reject('promise rejected');
        }
        h1.style.color = color;
        console.log('color changed to ', color);
        resolve('color was changed');
    }, delay);
    });
}

async function demo(){
    try{
        await colorChange('red', 1000);
        await colorChange('orange', 1000);
        await colorChange('green', 1000);
        await colorChange('yellow', 1000);
        await colorChange('blue', 1000);
    } catch(error) {
        console.log('error caught');
        console.log(error);
    }

    let a = 5;
    console.log(a);
    console.log('new number is ', a+3);

}

console.log(demo());
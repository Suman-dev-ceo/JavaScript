function savetoDB(data){
   
    return new Promise((resolve, reject) => {
         let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("success: data was saved");
        } else {
            reject('failure: weak connection');
        }
    });
     
}

// savetoDB('apna college') //promise object
// .then(()=> {
//     console.log('data1 was saved');
//     savetoDB('suman').then(()=>{
//         console.log('data2 was saved');
//     })
// })
// .catch(()=>{
//     console.log('promise was rejected')
// })

// more improved version bcz above one still uses callback hell


savetoDB('apna college') //promise object
.then((result)=> {
    console.log('data1 was saved');
    console.log('result of promise', result);
    return savetoDB('suman');
})
.then((result)=>{
    console.log('data2 was saved');
    console.log('result of promise', result);
    return savetoDB('suman');
})
.then((result)=>{
    console.log('data3 was saved');
    console.log('result of promise', result);
})
.catch((error)=>{
    console.log('promise was rejected');
    console.log('error of promise', error);
})
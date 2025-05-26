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

// let request = savetoDB('apna college'); // req = promise object

// request.then(() => {
//     console.log('promise was resolved');
//     console.log(request);
// })
// .catch(()=>{
//     console.log('promise was rejected');
//     console.log(request);
// })

//compact version

savetoDB('apna college')

.then(() => {
    console.log('promise was resolved');

})
.catch(()=>{
    console.log('promise was rejected');

})
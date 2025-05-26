function savetoDB(data, success, failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;

    if (internetSpeed > 4){
    success();
    } else {
    failure();    
    }

}

savetoDB('apna college', () => {
    console.log('success: data was saved');
    savetoDB('hellow world ', () => {
        console.log('success2: data was saved');
        savetoDB('suman', () => {
            console.log('success3: data was saved');
        }, () => {
            console.log('falure3 : weak connection');
        });
    }, () => {
        console.log('failure2: weak connection, data not saved');
    })
}, () => {
    console.log('failure: weak connection, data not saved');
});


//refer promiseobj.js to continue...
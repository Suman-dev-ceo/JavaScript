let todo = [];
let req = prompt('Enter your request:');
while(true){
    if(req=='quit'){
        console.log('quitting app');
        break;
    }

    if (req=='add'){
        let task = prompt('Please enter the task you want to add:');
        todo.push(task);
        console.log('Item added')
    }else if(req=='list'){
        console.log(`-----------------`)
        for(i=0; i<todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log(`-----------------`)
    }else if (req=='delete'){
        let idx = prompt('Enter the index no to remove task');
        todo.splice(idx,1);
        console.log(`Item deleted`)
    }else{
        console.log('Wrong Instruction');
        
    }
    req = prompt('Enter your request:');
}
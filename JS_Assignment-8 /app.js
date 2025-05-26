//  let arr = [
// {
//     name: 'suman',
//     marks: 95
// },
// {
//     name: 'suman',
//     marks: 95
// },
// {
//     name: 'suman',
//     marks: 95
// }];

// arr.forEach((student)=> {
//     console.log(student.marks);
    
// })

//to find min no in array

let arr = [6,8,3,7,9,2];

let min = arr.reduce((min, el) => {
    if(min>el){
        return el;
    } else {
        return min;
    }
})

console.log(min);

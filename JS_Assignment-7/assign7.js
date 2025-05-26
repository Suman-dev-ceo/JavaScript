//question 1 
// let arr = [1,2,3,4,5,6]
// const arrayAverage = (arr) => {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     let avg = sum/arr.length;
//     return avg;
// }

// console.log(arrayAverage(arr));

//question 2
// let n =7;
// const isEven = n => {
//     if(n%2==0){
//         console.log("Even");
//     }else{
//         console.log('odd')
//     }

// }


//alter
// let n =7;
// const isEven = n => (n%2 == 0);
// console.log(isEven(n));


//question 3
// const object = {
//     message : 'Hello World!',
//     logMessage(){
//         console.log(this.message);
//     },
// };

// setTimeout(object.message, 1000);


//quetion 4 
let length = 4;
function callback(){
    console.log(this.length);
}

const obj2 = {
    length : 5,
    method(callback){
        callback();
    },
};

obj2.method(callback,1,2);
//question - 1 

let arr = [1,2,3,4,5,6];

const avg = (arr)=>{
    let square = arr.map((el) => el * el);
    console.log(square);

    
    let summation = square.reduce((sum, el) => {
        sum += el;
        return sum;       
    });
    console.log(summation);

    let average = (summation)/(square.length);
    return average;
}

console.log(avg(arr));

//question - 2
// using above arr

let newArr = arr.map((el)=> el +5);
console.log(newArr);


//question - 3
let strArr = ['suman','srinivas','suchita','rachita'];

// let newStrArr = strArr.map((el) => {
//    return el.toUpperCase();

// });

console.log(strArr.map((string)=> (string.toUpperCase()))); //alternative

//question - 4
// let array = [1,2,3,4,5,6];

// function doubleAndReturnArgs(array, ...args){
//     let double = args.map((elt)=> (elt*2));
//     let newArray = [ ...array, ...double];
//     return newArray;
// }

// console.log(doubleAndReturnArgs(array,23,45,78,90));

//alter
 

const doubleAndReturnArgs = (array, ...args) => [...array, ...args.map((v)=> v*2)];
 

console.log(doubleAndReturnArgs([8,2,4,7],23,45,78,90));

//question - 5
const obj1 = {
    name : 'suman',
    age : 22,
    game: 'shuttle',
}

const obj2 = {
    nam : 'niyana',
    years : 20,
    sport: 'kho-kho',
}

const mergeObjects =  (obj1,obj2) => ({...obj1, ...obj2});
console.log(mergeObjects(obj1,obj2));

//The spread operator ... is used to copy all enumerable properties from obj1 and obj2 into a new object.
//Since both obj1 and obj2 have the same keys (name, age, game), the values from obj2 will override those from obj1.


//example
// const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
// console.log(mergeObjects({a:1,b:2},{c:3,d:4}));//{a:1,b:2,c:3,d:4}
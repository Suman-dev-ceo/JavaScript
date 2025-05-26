// //question - 2 
// let str = "abcdabcdefgggh";

// function extractUniquechar(str){
//     let ans = "";
//     for(let i = 0; i<str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             ans += currChar;
//         }
//     }
//     return ans;
// }

// extractUniquechar(str);


// let arr = [8,9,10,1,2,3,4,5,6,7];
// let num = 5;

// function getLargerNum(arr,num){
//     let result = [];
//     for(let i =0; i<arr.length; i++){
//         if(num<arr[i]){
//             result.unshift(arr[i]);
//         }
//     }
//     return result;
// }

//question 3 
// let country = ['Australia','Germany','United States of America'];


// function longCountryName(country){
//     let ansIdx = 0;
//     for(let i=0; i< country.length; i++){
//         let ansLen = country[ansIdx].length;
//         let currLen  = country[i].length;
//         if(currLen>ansLen){
//             ansIdx = i;
//         }
//     }

//     return country[ansIdx];

    
// }

// longCountryName(country);
// let str = 'suman'

// function countVowels(str){
//     let count = 0;

//     for(let i =0; i<str.length; i++){
//         if(
//             str.charAt(i) == 'a'  ||
//             str.charAt(i) == 'e'  ||
//             str.charAt(i) == 'i'  ||
//             str.charAt(i) == 'o'  ||
//             str.charAt(i) == 'u'   
//         ){
//             count++;
//         }
//     }
//     return count;
// }

//qustion 5
let start = 100;
let end = 200;

function generateRandom(start,end){
    let diff = end-start;
    return Math.floor(Math.random()*diff)+start;
}

console.log(generateRandom(300,400));
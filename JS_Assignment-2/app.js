//question-1
let num = 25;
if(num/10===0){
    console.log('good');
} else {
    console.log('bad')
}

//question-2
let userName = prompt("Enter your name:");
let age = prompt('Enter your age:');
alert(`${userName} is ${age} years old.`)

// question-3
let quater = 3;
switch(quater){
    case(1):
        console.log(`Months in Quarter1 : January, February, March`)
        break;
    case(2):
        console.log(`Months in Quarter2 : April, May, June`)
        break;
    case(3):
        console.log(`Months in Quarter3 : July, August, September`)
        break;
    case(4):
        console.log(`Months in Quarter4 : October, November, December`)
        break;
    default:
        console.log(`Not a Quarter!`)
}

//question 4
let str = 'america';
if((str[0]==='a' || str[0]==='A') && (str.length>5)){
    console.log(`Golden String`)
} else {
    console.log(`Normal String`)
}

//question 5
let x = 44;
let y = 28;
let z = 10;
if ((num1>num2) && (num1>num3)){
    console.log(`num1(${x}) is greater`);
} else if(num2>num3){
    console.log(`num2(${y}) is greater`);
} else{
    console.log(`num3(${z}) is greater`);
}

Alternative
let num1 = 44;
let num2 = 88;
let num3 = 110;
if (num1>num2)
{
    if(num1>num3){
        console.log(`num1(${num1}) is greater`)
    } else {
        console.log(`num3(${num3}) is greater`)
    }
} else {
    if(num2>num3){
        console.log(`num2(${num2}) is greater`);
    } else {
        console.log(`num3(${num3}) is greater`)
    }
}
// question 6
let a = '203';
let b = '643';

if (a[a.length-1]=== b[b.length-1]){
    console.log(`Both had last digit same`)
} else {
    console.log(`Not had last digit same`)
}

// question 6
let i = 348;
let j = 749;
if((a%10)===(b%10)){
    console.log(`Both have same last digit.`);

} else {
    console.log(`Both have different last digit.`)
}
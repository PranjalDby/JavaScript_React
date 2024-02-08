// Script mode
/**
 * The use strict directive was new in ECMAScript or(ECS) version 5
 * the purpose of use strict directive is to indicate that the code should be executed in "strict mode"
 * with strict mode u can not use undeclared variables.
 * it will throw error when try to use the undeclared variables.
 * In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
 * 
 * 
 * few Notes
 * Never Concatenate strict files and non strict files. this is probabily the easiest solution
 */

// "use strict"
// function printStricted() {
//    let x = 30;
//     console.log(x)
// }
// printStricted()

// var is global scoped keyword
// let is block scoped
// We have to ignore the uses of var

// var a = 45;
// var b = 'String';
// var c = null;
// var d = undefined;

console.log('Hello');

// ----------------------- alert keyword --------------------------------
// alert("hello world");
// console.log(typeof "helo");
// obje.printName()
// on above the alert is keyword, that is word which has a special meaning for javascript


// Primitive Data Types and Objects
// JS has 7 primitive data types
/**
 * Number:int,float,double
 * string
 * boolean
 * bigint
 * symbol
 * null
 * undefined
 */

let bigInt = BigInt("567"); //converts a primitive type to byte
console.log(bigInt);
let symblos = Symbol("It is A Symbol");
console.log(symblos);

// Object

const item = {
    name: "Pranjal",
    age: 34,
    classId:'241CSEII'
}
// we cam add new item or update the items value
item['roll'] = 23;
console.log(item);

let strs = 'Hello'; 
console.log(strs);
strs = 33; //type coercion
console.log(strs);

// expression and Operators
let a = 49;
let b = 3;
console.log(a++);
console.log(`after post increment = ${a}`);
console.log(--a);
// Assingment operator
/**
 * *=
 * **=
 * +=
 * /=
 * %=
 * -=
 */

// let name = prompt('Hello! Enter Your Name: ');
// let age = parseInt(prompt('Enter Your Age'));

// let driveLimit = age > 18 ? "You Can Drive" : "You Cannot Dribe"
                                        
// if (age >0 &&age >= 18) {
//     alert("oLDY you're already grown Up");
// }
// else if(age >0 && age < 18) {
//    alert('You little Child 😈')
// }
// else {
//     alert('Are You kidding me.. you Bastard Invalid Age')
// }

// switch (age) {
//     case -1:
//         alert('Are You kidding me.. you Bastard Invalid Age')
//         break;
    
//     case 1:
//         alert('You little Child 😈')
//         break;
//     case 2:
//         alert('You little Child 😈')
//         break;
//     case 3:
//         alert('You little Child 😈')
//         break;
//     case 4:
//         alert('You little Child 😈')
//         break;
//     case 5:
//         alert('You little Child 😈')
//         break;
    
//     default:
//         alert("oLDY you're already grown Up");
//         break;
// }
const objs = {
    name: [],
    age: []
}
// objs.name.push(name);
// objs.age.push(age);

// console.log(objs);

// let num = parseInt(prompt('Enter the Number: '))

// if (num % 2 === 0 && num % 3 === 0) {
//     console.log('No is divisible by 2 and 3')
// }

// For Loops

let mul = 13
for (let i = 0; i < 11; i++){

    console.log(`${mul} * ${i} = ${mul * i}`)
}

let sum = 0
for (let i = 1; i <= 10; i++){
    sum = sum + i
    console.log(i)
}
console.log(sum)

let lst = ['Markus', 'Emily', 'Jacob', 'Lucifer', 'Samael']

// for-in loop
for (let n in lst) {
    
    console.log(lst[n])
}

// for-of loop
console.log('Using for-of loop')
for (const iterator of lst) {
    console.log(iterator)
}

// Functions

function onePlusAvg(x, y) {
    let avg = 1 + (x+y)/2
    return Math.round(avg)
}


console.log(onePlusAvg(10, 20))

// Arrow functions

const onePlusAvgArrow = (x, y) => {
    let avg = 1 + (x + y) / 2
    return avg
} 

console.log(onePlusAvgArrow(30,20))

// practice set

let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    monika: 4
}
for (let m in marks) {
    console.log("Marks of " +  m + "= " + marks[m])
}
console.log('Other Ways')

for (let i = 0; i < Object.keys(marks).length; i++){
    console.log("Marks of " + Object.keys(marks)[i] + "= " + marks[Object.keys(marks)[i]])
}



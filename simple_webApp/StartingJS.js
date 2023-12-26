// variables

let names = 'Mosh';
var num = 30
names = "pranjal"

//const - fixed value

const interest = 0.3
console.log(typeof(interest))
// primitive types
/**
 * Primitive Types:
 * string
 * number
 * boolean
 * undefined
 * null
 */

let age = 30 //number
let isFault = false // boolean
let undefi_ned; //undefined
let nulls = null // null

// objects 
let person = {
    names:'Mosh',
    age:40
}

//changing the values -
// dot notation
//by indices..
person.names = "Pranjal"
person.age  =20
console.log(person.names)
//array literal
// dynamical typed array
let selected_color = ['red','blue','green']
let nums = [10,20,30,70,30]
function print_color(color){
    console.log(color)
}
function square(item){
    return Math.pow(item,2)
}
selected_color.map(print_color,selected_color) // map

returned = nums.map(square)
console.log(returned)

let price = 2.72737
// becuase javascript parse statement from left to right.
// to change
let ss = String(price);
console.log(ss.split('.'));

let afterDecimalLength = ss.split('.')[1].length;
console.log(afterDecimalLength)
while(afterDecimalLength != 0){
    price = price * 10
    afterDecimalLength -= 1
}

console.log(price);


// Primitive Datatypes
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const number = 100
const numberValue = 100.7
const str = "Smita"

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 1234567897892467465n

// Non-Primitive Datatypes
// Objects, Array, Function

const data = ["Shreya", "Lokesh", "Saurav", "Vaibhav"];
let myObj = {
    nam : "abc",
    age : 20
}

const myFunction = function() {
    console.log("Welcome to Nashik");
    
}

console.log(typeof str);
console.log(typeof number);
console.log(typeof numberValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof data);
console.log(typeof myFunction);



//const score = "500"
//console.log(typeof(score));
//const newScore = Number(500)
//console.log(`Number is : ${newScore}`, typeof newScore);

//Numbers in javascript 
let newScore = Number(500)
console.log(newScore.toString());
console.log(typeof newScore);

console.log(typeof newScore);

console.log(newScore.toFixed(2));
console.log(typeof newScore);

console.log(newScore.toPrecision(2));
console.log(typeof newScore);

console.log(newScore.toExponential(3));
console.log(typeof newScore);


//Maths in javascript

//Math Properties
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.LOG10E);
console.log(Math.LOG2E);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);

//Methods
console.log(Math.abs(-35));
console.log(Math.ceil(8.7));
console.log(Math.floor(8.7));
console.log(Math.round(2.26));
console.log(Math.min(23, 76, 88, 52, 34, 12));
console.log(Math.max(58, 45, 98, 78, 67,54, 43, 32));

console.log(Math.random());
console.log((Math.random()*10) + 1);
//console.log(Math.floor(Math.random()*10) + 1);

const min = 20
const max = 50

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
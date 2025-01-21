//creation of string

const uname = "shreya "                          //Literals i.e using double quotes
const uemail =' shreya@test.com'                 //Literals i.e using single quotes
//console.log("User name is : ",uname  +   "User Email is : ",uemail);         // concatenated two string using + operator is outdated so as for modern way we use backticks which is also known as string interpolation

console.log(`User Name : ${uname} and User Email : ${uemail}`);          // string interpolation



//Basic operation on string

//length of string
const samp = "Welcome to WEB Development"
console.log(`Sample string length is : ${samp.length}`);

//string concatenation
const str1 = "javascript"
const str2 = "php"
const str3 = "html & css"
console.log(`Web development requires : ${str3},` + `${str2},` + `${str1}`);

//substring of a string
const st = "Javascript used for web development"
console.log(`Substring is : ${st.substring(0,11)}`);

//Uppercase & Lowercase of a string
const city = "nashik"
const state = "MAHArashtra"
console.log(`Uppercase of string : ${city.toUpperCase()}`);
console.log(`Lowercase of string : ${state.toLowerCase()}`);

//string search
const str = "A JavaScript String is a sequence of characters, typically used to represent text."
console.log(`search string : ${str.indexOf('String')}`);

//string replace
const ex = "Strings are immutable in programming languages like Java, Python and C."
console.log(`replaced string : ${ex.replace('C', 'Javascript')}`);

//trimming of whitespaces in string
const st1 = "                        welcome to programming                  "
console.log(`removing whitespaces : ${st1.trim()}`);

//access character from string
const s1 = "FrontEnd Development : HTML, CSS, Javascript"
console.log(`individual character : ${s1.charAt(0)}`);

//string comparison
const stn1 = "Node JS"
const stn2 = "Angular JS"
const res = stn1.localeCompare(stn2);
console.log(`Compared string : ${res}`);

//passing string as object
const strn = new String("Web Development")
console.log(`Output : ${strn}`);


//string methods


const eg = "Full Stack Development"
//slice()
console.log(`String is : ${eg.slice(0, 4)}`);
console.log(`String is : ${eg.slice(5, -4)}`);
console.log(`String is : ${eg.slice(-11, -6)}`);
console.log(`String is : ${eg.slice(11, 6)}`);
//substring()
console.log(`String is : ${eg.substring(11, 6)}`);
//substr()
console.log(`String is : ${eg.substr(5,5)}`);
//replace()
console.log(`String is : ${eg.replace('Full Stack','Front End')}`);
//replaceAll()
const regexp = /coffee/ig;
let string = "Lets, have coffee today!";
console.log(`String is : ${string.replaceAll(regexp,'tea')}`);
//trim(),trimStart(),trimEnd()
const vr = "                Hello World of Programmers            "
console.log(`String is : ${vr.trim()}`);
console.log(`String is : ${vr.trimStart()}`);
console.log(`String is : ${vr.trimEnd()}`);
//padStart(), padEnd()
const v1 = "Geeks for Geeks"
console.log(`String is : ${v1.padStart(17,"**")}`);
console.log(`String is : ${v1.padEnd(20,"@@")}`);
//charAt(), charCodeAt()
console.log(`String is : ${v1.charAt(7)}`);
console.log(`String is : ${v1.charCodeAt(3)}`);
//split()
let a1 = "HTML, CSS, and Javascript"
let a2 = a1.split("and");
console.log(a2);

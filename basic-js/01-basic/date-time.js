//Date object in JavaScript
const cDate = new Date()
console.log(cDate);                               //it will return current date and time;     2025-02-05T11:57:06.301Z

//using static methods
const currDate = Date.now();
console.log(currDate);                             //returns the current timestamp in milliseconds;  1738755211984

const uDate = Date.parse('February 10, 2024'); 
console.log(uDate);                            //parses a date string and returns the number of milliseconds between the date string;   1707523200000

const nDate = Date.UTC(2025, 15, 1, 17, 25, 30, 65);
console.log(nDate);                                  //used to create a date object representing a specified date and time in UTC (Coordinated Universal Time);    1775064330065

//using 'set' method
const sDate = new Date('2025-09-15')
console.log(sDate);

let a1 = sDate.setDate(20)
console.log(a1);                     //set the day of the month.

let b1 =sDate.setFullYear(2024)
console.log(b1);                       //Sets the year.

let c1 = sDate.setMonth(10)
console.log(c1);                       //Sets the month.

let d1 = sDate.setHours(20, 15, 20)
console.log(d1);                             //Sets the hour.

//using 'get' method

const gDate = new Date('March 15, 2025, 05:35:32')

let a = gDate.getFullYear();
console.log(a);                            //Returns the full year (e.g., 2024).

let b = gDate.getMonth();
console.log(b);                       //Returns the month (0 for January, 11 for December).

let c = gDate.getDate();
console.log(c);                        //Returns the day of the month (1-31).

let d = gDate.getHours();
console.log(d);                          //Returns the hour (0-23).

let e = gDate.getMinutes();
console.log(e);                         //Returns the minutes (0-59).

let f = gDate.getSeconds();
console.log(f);                         //Returns the seconds (0-59).

let g = gDate.getHours();
console.log(g);                          // Returns the milliseconds (0-999).

//using 'to' method 

const newDate = new Date()
console.log(newDate.toString());                   //convert the given date object’s contents into a string;  Wed Feb 05 2025 11:33:31 GMT+0000 (Coordinated Universal Time)
console.log(newDate.toDateString());               //converts the given date object’s contents of the date portion into a string;  Wed Feb 05 2025
console.log(newDate.toISOString());                //convert the given data object’s contents into a string in ISO format (ISO 8601) i.e. in the form of (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ);  2025-02-05T11:33:31.967Z
console.log(newDate.toJSON());                     //converts the given date object’s contents into a string; 2025-02-05T11:33:31.967Z
console.log(newDate.toLocaleDateString());         //convert the date and time of a Date object to a string representing the date portion using the locale-specific conventions; 2/5/2025
console.log(newDate.toLocaleString());             //used to convert a date and time to a string using the locale settings;  2/5/2025, 11:33:31 AM
console.log(newDate.toLocaleTimeString());         //used to fetch the time from a given Date object;   11:33:31 AM
console.log(newDate.toTimeString());               //used to return the time portion of the given date object in English;  11:33:31 GMT+0000 (Coordinated Universal Time)

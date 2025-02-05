let useremailOne = "shreya@test.com"
let useremailTwo = useremailOne
useremailTwo = "lokesh@test.com"

console.log(useremailOne);
console.log(useremailTwo);

let userAddressOne = {
    city : "Nashik",
    state : "Maharashtra",
    country : "India"

}

let userAddressTwo = userAddressOne;

userAddressTwo.city = "Mumbai";

console.table(userAddressOne);
console.log(userAddressTwo.city);


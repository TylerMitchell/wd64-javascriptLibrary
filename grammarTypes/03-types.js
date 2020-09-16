/*
    - boolean
    - undefined
    - number
    - string
        - bigInt*
        - symbol*
    - null
    - Object
    - Function
*/

/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

/*
let firstName = "Tyler";
let lastName = "Mitchell";
let houseNumber = 7040;
let street = "Perry Commons Ave.";
let city = "Indianapolis";
let state = "Indiana";
let zipcode = 46217;
*/

let personAddress = {
    firstName : "Tyler",
    lastName : "Mitchell",
    houseNumber : 7040,
    street : "Perry Commons Ave.",
    city : "Indianapolis",
    state : "Indiana",
    zipCode : 46217
};

//refreshing myself on destructuring
({firstName, lastName, houseNumber, street, city, state, zipCode} = personAddress);

console.log( `${firstName} ${lastName}\n${houseNumber} ${street} \n${city}, ${state}, ${zipCode}` );
console.log(this);
console.log(~0b1);
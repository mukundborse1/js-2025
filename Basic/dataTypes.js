/*
JavaScript mainly has two types of data types likewise other programming langauges.
1. Primitive Data Types
2. Non-Primitive Data Types
*/

// PRIMITIVE DATA TYPES :- Primitive datatypes represent single values and are immutable.

// Numbers : All types of integer and decimals number comes under it.
let age = 27;
console.log(age);
let pi = 3.14;
console.log(pi);

// String : Represent all character mention inside single or double quote.
let city = 'Pune';
console.log(city);

// Boolean : true or false.
let isAdmin = true;
console.log(typeof(isAdmin));

// Undefined : Variable declear but not assign any value to it.
let isDefine;
console.log(typeof(isDefine));

// Null : Assign value null to it.
let data = null;
console.log(data);

// BigInt : Represents integers larger than Number.MAX_SAFE_INTEGER.
let bigNumber = 37366799999997337n;
console.log(bigNumber);
console.log(typeof(bigNumber));

// Symbol : Represents unique and immutable values, often used as object keys.
let sym = Symbol('unique');

// NON-PRIMITIVE DATA TYPES : Non-primitive types are objects and can store collections of data or more complex entities.

// Object : Represents key-value pairs.
let personalInfo = {
    name: 'Mukunda',
    age: 27,
    city: 'Pune'
}
console.log(personalInfo.age);

// Array : Represents an ordered list of values.
let cities = ['Pune','Mumbai','Delhi'];
console.log(cities);

// Function : Represents reusable blocks of code.
function introToFunction () {
    console.log("Hey...!!");
}
introToFunction();
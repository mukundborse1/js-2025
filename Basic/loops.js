/*
In javascirpt, loops are used to execute a block of code repeatedly until a specified condition is met.
There are several types of loops in JavaScript, including for loops, while loops, and do-while loops.
Each type of loop has its own syntax and use cases. Below are examples of each type of loop in JavaScript.
*/

/* for loop :- The for loop is used when the number of iterations is known beforehand. 
It consists of three parts: initialization, condition, and increment/decrement.*/
let a=5;
for(let i=0;i<a;i++){
    console.log(i);
}
// Output: 0 1 2 3 4

/* for in Loop :- The for in loop is used to iterate over the properties of an object or the elements of an array.
It is not recommended for arrays as it may not iterate in the order of the elements.*/
let obj = {name: "John", age: 30, city: "New York"};
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
// Output: name: John age: 30 city: New York

// for of Loop :- The for of loop is used to iterate over iterable objects like arrays, strings, and maps.
// It is more readable and easier to use than the for in loop for arrays.
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}
// Output: 1 2 3 4 5

/* while loop :- The while loop is used when the number of iterations is not known beforehand.
It continues to execute as long as the specified condition is true.*/
let i = 0;
while (i < a) {
    console.log(i);
    i++;
}
// Output: 0 1 2 3 4


// variables and constansts

// var has global scope. we can re-declear variable within same scope.
var names = 'Pune';
console.log(names);

// let has block scope. we can re-assign value to variable in same scope but cannot re-declear variable in same scope.

let age= 27;
console.log(age);
age = 45;
console.log(age);
// let age =  showing error as we are trying to redeclear variable in same scope

// const has block and global scope. We cannot reassign and re-declear value in the same scope.
const city = 'Pune';
console.log(`${city} is best.`);

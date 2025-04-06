/* JavaScript has mathematical operators, comparison operators, logical operators, bitwise operators,
 assignment operators and ternary operator. */

// 1. Mathematical Operators : Used to perform basic arithmetic operations like addition, subtraction, multiplication, division and modulus.
let num1 = 10;
let num2 = 20;
console.log(num1 + num2); // Addition
console.log(num1 - num2); // Subtraction
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division
console.log(num1 % num2); // Modulus
console.log(num1 ** num2); // Exponentiation (Power)
console.log(num1++); // Increment
console.log(num1--); // Decrement
console.log(++num1); // Pre-increment

console.log(--num1); // Pre-decrement
console.log(num1 += num2); // Addition assignment
console.log(num1 -= num2); // Subtraction assignment

console.log(num1 *= num2); // Multiplication assignment
console.log(num1 /= num2); // Division assignment
console.log(num1 %= num2); // Modulus assignment
console.log(num1 **= num2); // Exponentiation assignment
console.log(num1 **= 2); // Exponentiation assignment

// 2. Comparison Operators : Used to compare two values and return a boolean result (true or false).
let num3 = 25;
let num4 = 30;
console.log(num4 == num3); // Equal to
console.log(num4 != num3); // Not equal to
console.log(num4 === num3); // Strict equal to (checks value and type)
console.log(num4 !== num3); // Strict not equal to (checks value and type)

// 3. Logical Operators : Used to combine multiple boolean expressions and return a boolean result.

let a = false;
let b = false;
console.log(a && b); // Logical AND
console.log(a || b); // Logical OR
console.log(!a); // Logical NOT

// 4. Bitwise Operators : Used to perform bit-level operations on numbers.
let x = 5; // 0101 in binary
let y = 3; // 0011 in binary
console.log(x & y); // Bitwise AND

console.log(x | y); // Bitwise OR
console.log(x ^ y); // Bitwise XOR
console.log(~x); // Bitwise NOT
console.log(x << 1); // Left shift
console.log(x >> 1); // Right shift
console.log(x >>> 1); // Unsigned right shift

// 5. Assignment Operators : Used to assign values to variables.
let num5 = 10;
let num6 = 20;
num5 += num6; // Add and assign
console.log(num5); // 30
num5 -= num6; // Subtract and assign
console.log(num5); // 10
num5 *= num6; // Multiply and assign
console.log(num5); // 200
num5 /= num6; // Divide and assign
console.log(num5); // 10
num5 %= num6; // Modulus and assign

// 6. Ternary Operator : A shorthand way to write an if-else statement.
let age = 18;
let isAdult = (age >= 18) ? 'Adult' : 'Not Adult';
console.log(isAdult); // Adult

// 7. Typeof Operator : Used to check the type of a variable.
let dataType = typeof num1;
console.log(dataType); // number

// 1. What is the value of result?
const value = 20.0;
const result = Number.isInteger(value); // true
console.log(result); // The Number.isInteger() method determines if value is an integer

// 2. Which is the correct JavaScript comment syntax?
// Options
// /Comment/
// <<Comment>>
// >>Comment<<
// /*Comments*/ -> correct one // single line comments // /* Multiline comment*/

// 3. Which of  the following is INCORRECT variable name?
// Options
// _2result
// r1e2s3u4l5t
// _result
// $result
// 2result -> correct // variable names must begin with leters, $, or _, variable names are case sensitive, Not numbers

// 4. What is the value of result?
const func = function (a, b) {
    return arguments.length;
}
const result = func(4, 3, 2, 1);
console.log(result);
// The arguments.length is a reference to the number of arguments passed to te function.

// 5. What is the value of result?
const result = 95;
const RESULT = 2009;
const Result = 262;
// value of result is 95, name variables are case sensitive

// 6. What is the value of result?
let value = 95;
const result = value++;
console.log(result); //95
// value++ - postfix - returns the value before incrementing
// ++value - prefix - returns the value after incrementing

// 7. What is the value of result?
const str = "JavaScript";
const result = str.length;
console.log(result);// 10

// 8. Is JavaScript case sensitive?
// Yes
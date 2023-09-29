// Test 1
// 1. What is the value of result?
const array = [1, 2, 3];
const result = array [3];

console.log(result); //undefined
// JavaScript arrays are zero-indexed: the first element
// of an array is the index 0, and the last element is at the 
// index equal to the value of the array's length property
// minus 1. Using an invalid index number returns Undefined./

// 2. What is the value of result?
const obj = Object.assign({
    name: "JavaScript"
}, {
    name: "ECMAScript"
}, {
    name: "LiveScript"
});

const result = obj.name;
console.log(result); // LiveScript
// The Object.assign() method is used to copy the 
// values of all enumerable own properties from one or
// more source objects to a target object. Properties in 
// the target object will be overwritten by properties in 
// the sources if they have the same Key . Later sources
// properties will similarly overwrite earlier one.

// 3. What is the value of result?
const array = [1, 2, 3, 5];
const result = array.indexOf(3);

console.log(result); // 2 
// JavaScript arrays are zero-indexed: the first element
// of an array is at index 0, and the last element is at the
// index equal to the value of the array;s length property
// minus 1. The indexOf() method returns the first index 
// at which a given element can be found in the array, 
// or -1 if it is not present.

// 4. Which of this is the same as result += value?
// options:
// result = value++
// result = ++value
// result = value
// result = value + value
// result = result + value
// Answer: the += (additon assignment) operator adds the value
// of the right operand to a variable and assigns the 
// result to the variable. The types of the two operands
// determine the behavior of the addition assignment
// operator.

//5. What is the value of result?
const o = {
    name: "Brendan"
};
const s = JSON.parse(JSON.stringify(o));
const result = s === o; 
console.log(result); // false
// The JSON.stringify() method converts a JavaScript
// value to a JSON string. The JSON.parse() method
// parses a JSON string, constructing the JavaScript
// value or object described by e the string. JSON.parse()
// creates new object. 
// recordemos
const obj === const obj // false

// 6. What is the value of result?
const result = "2009" - "1995";
console.log(result); // 14
// The - (subtraction operator) subtracts the two
// operands, producing their difference. It tries to
// convert both operands to number before evaluating.
// in cannot it returns NaN
const result = 4 / "1" + + "5";
console.log(result); // 9 

// 7. Which fo these IS NOT a logical operator?
// options
// !
// || 
// |
// &&
// Answer: | , There are three logical operators in JavaScript: &&
// (logical AND), || (logical OR) and ! (logical NOT). 
// | is a bitwise OR operator

// 8. What is the value of result?
const re = /java/i;
const str = "JavaScript";
const result = re.test(str);
console.log(result); // true
// The test() method executes a search for a match
// between a regular expression and a specified string.
// The i flag in regular expression is used for case 
// insnsitivity.


// What is the valu of result?
const result = "ECMAScript".slice(1, -1);
console.log(result); // CMAScrip, cuts text between first and last letters
// The slice([beginIndex, endIndex]) method extracts a section of a tring and returns it as a new string.

// What is the value of result?
const array = [1, 2, 3];
array.push(4); //.push() adds one or more elements to the end of an array, returns the new lenght of the array.
console.log(array.push(4));// 5, returns the length of the array
console.log(array); // [1,2,3,4,4]
array.pop(); //4 .pop() removes the last element from an array and returns that element.
console.log(array.pop()); // 4
console.log(array); // [1,2,3]
const result = array.length; 
console.log(result); // 3, is the lenght of the array
console.log(array); // [1,2,3]

// What is the value of result?
const value = -2009;
const result = Math.abs(value); // Math.abs() function returns the absolute value of a number.
console.log(result); // 2009

// What is the value of result?
const result = true + true;
console.log(result); // 2, + operator will convert boolean to a number. true to 1, false to 0.

// What is the value of result?
const str = "JavaScript";
const substr = str.substr(1, 4); // .substr() method returns the part of a string between the start index and a number of characters after it.
console.log(substr); // avaS
const substring = str.substring(1, 4); // .substring() method returns the part of the string between the start and end index, or to the end of the string.
console.log(substring); // ava
const result = substr.indexOf(substring); // .indexOf() method returns the index within the calling String object of the first occurence of the specified value, starting the search at fromIndex.
console.log(result); // 0

// What is th value of result?
const a = [1, 2, 3, 4, 5];
const result = a.push(6) - a.pop(); // 6 - 6 = 0
console.log(result); // 0
// The push() adds one or more elements to the end of an aray and returns the new length of the array. 
// The pop() removes the last element from an array and returns that element.

// What is the value of result?
const result = 3**3;
console.log(result); // 27, 3**3 means to the potential 3 = 3*3*3
// The exponentiation assignment operator ** 

// What is the value of result?
const result = !!null;
console.log(result); // false
// ! (logical NOT)returns false if its singel operand, can be converted to true; otherwise, returns true.
// The value null represents the intentional absence of any object value and can be converted to false.
// !null = true
// !!null = false

// What is the value of result?
const result = Math.round(19.95);
console.log(result); // 20, Math.round() function returns the value of a number rounded to the nearest integer.

// What is the value of result?
const value = Math.PI; // Math.PI property represents the ratio of the circumference of a circle to its diameter. 3.14159
const result = Math.ceil(value); // Math.ceil() function returs the smallest integer greater than or equal to a given number.
console.log(result); // 4, 

// What is the value of result?
let value = 0;

do {
    value += 1;
} while (false);
const result = value;
console.log(result);// 1
// The do...while statement creates a loop that executes a specified statement untile the test condition evaluates to false.
// The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

//Which IS NOT a primitive data type in JavaScript?
//Options - number | string | boolean | char | undefined
// R = char
// A primitive (primitive value, primitive data type) is data that is not an object and has no methods.
// In JavaScript, there are 6 primitive data types: string | number | boolean | null | undefined | symbol

// What is the value of result?
const array = [1, 2, 3];
const result = array.join();
console.log(result); // 1,2,3
// The join([separator]) method joins all elements of an array (or an array-like object) into a string and returns this string.
// separator specifies a string to separate each pair of adjacent elements of the array.
// The separator is converted to a string if necessary. If omitted, the array elements are joined with a comma "," string.

//What is the value of result?
let text = "ECMAScript";
const result = text.charAt(1);
console.log(result); // C
// The String object's charAt() method returns a new string consisiting of the single character located at the specified offset into the string.

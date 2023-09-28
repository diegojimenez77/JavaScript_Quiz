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
console.log(result);
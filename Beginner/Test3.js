// 1. What is the value of result?
const func = function () {
    return 2009;
}
const result = 262 && func();
console.log(result)// 2009
// && (logical AND) returns left operand if it can be converted to false;
// otherwise, returns right operand.

// 2. What is the value of result?
const value = new Set([1, 2, 3]);
value.add(1);
const result = value.size;
console.log(result); // 3
console.log(value); // Set(3) { 1, 2, 3 }
// The Set object lets you store unique values of any
// type, whether primitive values or object references.
// A value in the Set may only occur once; it is unique in 
// the Set's collection. Value 1 already exists inside the 
// Set.
// new Set([]), permite almacenar valores unicos, .add agrega valores a new Set([]), si el valor ya existe no lo agrega.
// si colocamos otro numero no incluido como 5, imprime Set(4) {1, 2, 3, 5}

// 3. What is the value of result?
const result = ~~(12.34);
console.log(result); // 12
// ~ operador bitwise - inversion bitwise o operador NOT bitwise.
// Inversion (negacion logica) a nivel de bits en los numeros enteros 
// convierte el numero entero en su representacion binaria de 32 bits
// Invierte cada bit, es decir cambia 0 por 1 y 1 por 0
// Devuelve el resultado como un nueve numero entero.
// utilizado en operaciones de bits.

// 4. What is the value of result?
const result = "1_2_3".split("_");
console.log(result); // ["1", "2", "3"]

// 5. What is the value of result?
const f = (r, v) => r + v;
const result = [1, 2, 3].reduce(f, 0);
console.log(result); // 6
// The reduce() method applies a fucntion against an 
// accumultor and each element in the array (from left
// to right) to reduce it to a single value.

// 6. What is the value of result?
const array = [1, 2, 3];
array.shift();
const result = array;
console.log(result);// [2,3]
console.log(array.shift()); //2
// The shift() method removes the first element from an
// array and returns that removed element. This method
// changes the length of the array

// 7. What is the value of result?
const isTrue = false;
const result = isTrue ? 2009 : 262;
console.log(result); // 262
// The conditional (ternary) operator is the only
// JavaScript operator that takes three operands.
// Syntax is condition ? expression1 : expression2.
// If condition is true, the operator returns the value
// of expression1; otherwise, it returns the value of
// expression2.

// 8. How to convert an object into JSON string?
// Options
// JSON.toString()
// JSON.parse()
// JSON.stringify() -> correct = JSON.stringify() method converts a JavaScript value to a JSON string
// JSON.valueOf()

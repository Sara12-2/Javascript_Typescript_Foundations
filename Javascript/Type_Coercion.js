//Type Coercion in JavaScript
//JavaScript automatically ek type ko doosre type mein convert kar sakti hai.Is process ko type coercion kehte hain.

console.log("5" + 2); //52
// + is for concatenation, so 2 is converted to string and concatenated with "5"

console.log("5" - 2); //3
// - is for subtraction, so "5" is converted to number and subtracted from 2

console.log(true + 1); //2
// true is converted to 1 and added to 1

console.log(false + 1); //1
// false is converted to 0 and added to 1

//Main Points
//Type coercion is the automatic or explicit conversion of one data type into another.

console.log(1 + "2" + 3);
//123 left to right evaluation hoti h 
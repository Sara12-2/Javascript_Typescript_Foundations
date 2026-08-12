//== vs ===
//== is the equality operator that performs type coercion before comparing values.  

console.log(5 == "5"); //true, because "5" is coerced to a number before comparison


//=== is the strict equality operator that does not perform type coercion. It checks both value and type.

console.log(5 === "5"); //false, because the types are different (number vs string)




// main points 
// we should generally use ===, because it avoids unexpected type coercion.
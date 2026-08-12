//6. Truthy & Falsy

//JavaScript mein kuch values false behave karti hain.
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

if ("hello") {
    console.log("Runs");
} //Output: Runs becuase hello is truthy value

if (0) {
    console.log("Does not run");
}
//becuase 0 is considered falsy value, so the code inside the if block will not run
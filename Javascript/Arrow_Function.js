//Arrow Function
const greet = () => {
    console.log("Hello");   
};

greet();    


const add=(a,b) => a+b;

console.log(add(2,3)); //5

//arrow function mein agar sirf ek hi parameter h to parenthesis optional h
//arrow function have not its own "this" context, it uses the "this" value from the enclosing lexical context.
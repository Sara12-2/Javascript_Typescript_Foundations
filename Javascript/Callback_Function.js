//callbackl function
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}// output: Hello Alice

//function ko dosry function main as an argument pass krna callback function khty h

function sayGoodbye() {
    console.log("Goodbye!");
}   

greet("Alice", sayGoodbye);

// Javascript Day 1 
// Three common ways to declare the varaible 
//var Function scoped h er is main same variable ko recalre kiya ja skhta h 
var name = "Sara";
//var can be reassigned and also redeclared
var name = "Ali";

console.log(name); // Ali

//let Block scoped h er is main same variable ko redecalre nhi kiya ja skhta 1 hi scope main
let name1 = "Sara";
name1 = "Ali"; //reassign kr skhty h
//let name1 = "Ali"; //Error redeclare nhi kr skhty
let age=21;
age=23;
console.log(age )
// 23


//const ko decalre krny ky baad reassign nhi kr skhty 
const country="Pakistan";
country="India";
//Error 




//Main points 
//Modern JavaScript mein generally let aur const use karo. var mostly legacy code mein milta hai.

if (true) {
    let x = 10;
    var y = 20;
}

console.log(y); // 20
// console.log(x); // Error
// let const block scope   h er var function scope
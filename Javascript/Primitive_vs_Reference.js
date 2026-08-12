//Primitive vs Reference Types
//Primitive values directly variable main store hoti hain

let a = 10;
let b = a;

b = 20;

console.log(a); //10
console.log(b); //20
   

//Reference values variable main store nahi hoti balky unka reference store hota hai

let user1 = {
    name: "Sara"
};

let user2 = user1;

user2.name = "Ali";

console.log(user1.name); //Ali 


//Main Points 
//1.Why does changing user2 also change user1?

//Because objects are reference types. Both variables point to the same object in memory.

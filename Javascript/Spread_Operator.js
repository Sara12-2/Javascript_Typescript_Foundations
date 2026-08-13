//Spread Operator 
//Spread operator values ko expand karta hai

const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

//object 
const user = {
    name: "Sara",
    age: 20
};

const updatedUser = {
    ...user,
    age: 21
};

console.log(updatedUser);
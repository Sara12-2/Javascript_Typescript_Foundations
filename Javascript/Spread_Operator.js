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
// Purana object safe rehta hai, hum naya updated object bana lete hain.

console.log(updatedUser);

//Array mein: purani values + nayi values ek naye array mein.

//Object mein: purani properties + nayi/updated properties ek naye object mein.

//Importante: Original data ko modify nahi karta, copy banata hai (immutability).

const arr1 = [1, 2];
const arr2 = [3, 4];

const result = [...arr1, ...arr2];

console.log(result);
// [1, 2, 3, 4]
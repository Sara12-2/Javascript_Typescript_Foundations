//Destructuring ka purpose object/array se values easily extract karna hai
//object destructuring
const user = {
    name: "Sara",
    age: 20
};

const { name, age } = user;

console.log(name);
console.log(age);

//Array destructuring
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);
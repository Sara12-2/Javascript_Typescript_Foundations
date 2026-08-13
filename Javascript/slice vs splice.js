//slice() vs splice()

//slice array ka portiopn copy krta h 

const numbers = [1, 2, 3, 4, 5];

const result = numbers.slice(1, 4);

console.log(result); //output: [2, 3, 4]

//splice() array ko modify krta h

const numbers = [1, 2, 3, 4, 5];

numbers.splice(1, 2); //start index,delete count 

console.log(numbers); //output: [1, 4, 5]

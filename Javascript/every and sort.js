//every()
//Check karta hai all elements condition satisfy karte hain ya nahi.

const numbers = [2, 4, 6, 8];

console.log(numbers.every(num => num % 2 === 0));

//true 

//some() method check at least one and every() checks all elements  


//sort()
//array ko sort krta h 


const numbers = [10, 2, 5, 1];

numbers.sort();

console.log(numbers); //output: [1, 10, 2, 5]

//Unexpected result aa sakta hai because default sort() values ko strings ki tarah compare karta hai.


//for numbers ko sort krne k liye compare function provide karna hoga.

numbers.sort((a, b) => a - b); //Ascending order
//output: [1, 2, 5, 10]
numbers.sort((a, b) => b - a); //Descending order
//output: [10, 5, 2, 1]

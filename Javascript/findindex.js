//findIndex()
//first matching element ka index return krta hai, agar match na ho to -1 return krta hai


const numbers = [5, 10, 15, 20];

const index = numbers.findIndex(num => num > 10);

console.log(index); // Output: 2
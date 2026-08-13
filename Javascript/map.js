//Array Methods 

const num=[1,2,3,4,5];

//map()
//map() method ek naya array return karta hai, original array ko modify nahi karta.
//numbers.map(num,index,array) => return value



//Example: Doubles each number in the array
const number=[1,2,3,4,5];
const doubled=number.map(num=>num*2);
console.log(doubled);

//output: [2,4,6,8,10]
console.log(number); //original array remains unchanged: [1,2,3,4,5]
//forEach()
//array ky hr element pr function execute krta hai, or koi naya array return nahi krta


const numbers = [1, 2, 3];

numbers.forEach(num => {
    console.log(num);
}); 
//output 1,2,3 
//it does not give new transformed array, it just executes the function for each element in the array.


const result = numbers.forEach(num => num * 2);

console.log(result); // undefined

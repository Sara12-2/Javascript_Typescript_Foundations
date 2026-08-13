//reduce()
//multiple values ko single result main reduce karta hai


const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum); // Output: 10

//Main points 
//A single accumulated value. It can be a number, string, object, array, etc.
//hr element ky sath total main 1 add hota hai aur final result return hota hai.
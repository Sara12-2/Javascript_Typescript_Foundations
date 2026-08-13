//object destructuring
const user = {
    name: "Sara",
    age: 20,
    city: "Layyah"
};

const { name, age, city } = user;
console.log(name); // Output: "Sara"
console.log(age); // Output: 20
console.log(city); // Output: "Layyah"


//can also rename the variables while destructuring
const { name: userName, age: userAge, city: userCity } = user;
console.log(userName); // Output: "Sara"    
console.log(userAge); // Output: 20
console.log(userCity); // Output: "Layyah"
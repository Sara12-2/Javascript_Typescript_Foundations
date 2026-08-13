//Shallow copy 
const user = {
    name: "Sara",
    address: {
        city: "Layyah"
    }
};


const copy = { ...user }; //shallow copy
copy.address.city = "Lahore";

console.log(user.address.city); // Output: "Lahore"
copy.name = "Ali";
console.log(user.name); // Output: "Sara"
console.log(copy.name); // Output: "Ali"



//main points 

//sirf pehli level (top-level) ki properties copy hoti hain.

//Nested objects (objects ke andar objects) ka reference (address) copy hota hai, actual copy nahi.

//Isliye nested object mein change original ko bhi affect karta hai.
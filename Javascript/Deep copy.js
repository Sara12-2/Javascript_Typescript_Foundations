//deep copy 
//nested objects are copied too.
const user = {
    name: "Sara",
    address: {
        city: "Layyah"
    }
};
const copy = structuredClone(user);
copy.address.city = "Lahore";

console.log(user.address.city); // Output: "Layyah"
copy.name = "Ali";
console.log(user.name);
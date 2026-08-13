const user = {
    name: "Sara",
    age: 20,
    city: "Layyah"
};

//object.keys()
const keys = Object.keys(user);
console.log(keys); // Output: ["name", "age", "city"]

//object.values()
const values = Object.values(user);
console.log(values); // Output: ["Sara", 20, "Layyah"]

//object.entries()
const entries = Object.entries(user);
console.log(entries); // Output: [["name", "Sara"], ["age", 20], ["city", "Layyah"]]

//object.assign()
//object merge/copy krny kylyr 
const user = {
    name: "Sara"
};

const extra = {
    age: 20
};

const result = Object.assign({}, user, extra);

console.log(result); // Output: { name: "Sara", age: 20 }


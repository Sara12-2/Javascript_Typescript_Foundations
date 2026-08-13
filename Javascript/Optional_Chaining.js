//Optional chaining
//agr nested property exist na kare to error avoid krta h 

//without optional chaining
const user = {};

console.log(user.address.city);

//error a skhta h becuase address property exist nahi krta h user object me, to city property access karne pe error aayega

//with optional chaining
const user1 = {};

console.log(user1.address?.city); //undefined return hoga, error nahi aayega
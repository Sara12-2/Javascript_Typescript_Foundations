//Closures

//closure =function+ uska lexical environement 


function outer() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = outer();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//outer() execute ho chuka hai, phir bhi inner function count ko remember karta hai.


//closure usage 
//private stats ,factories,callbacks,event handlers and memorization main use hoty hain 
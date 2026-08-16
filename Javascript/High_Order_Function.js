//high order function
//function ko as an argument ly ya tfunction return bhi kry 
function multiplyBy(x) {
    return function (y) {
        return x * y;
    };
}

const double = multiplyBy(2);

console.log(double(5));
// 10


// Example 1: Different multipliers
const triple = multiplyBy(3);
console.log(triple(4));  // 12 (3 * 4)

const half = multiplyBy(0.5);
console.log(half(10));   // 5 (0.5 * 10)

// Example 2: Real-world use case (Discount calculator)
function applyDiscount(discountRate) {
    return function(price) {
        return price - (price * discountRate / 100);
    };
}

const studentDiscount = applyDiscount(20);
console.log(studentDiscount(1000));  // 800 (20% discount)

const festiveDiscount = applyDiscount(15);
console.log(festiveDiscount(2000));  // 1700 (15% discount)
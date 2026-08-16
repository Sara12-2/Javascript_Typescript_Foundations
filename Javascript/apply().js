//apply bhi call jesa hota h but is ky arguments array main hoty hain 
function add(a, b) {
    return a + b;
}

console.log(add.apply(null, [10, 20]));
// 30